# Fernanda Saladino — E-commerce de Cuero Artesanal

Tienda online para Fernanda Saladino, artesana argentina especializada en carteras, bolsos y accesorios de cuero hechos a mano. Proyecto freelance desarrollado de punta a punta: diseño, frontend, backend y deploy.

🔗 **Demo en vivo:** [fernanda-saladino.vercel.app](https://fernanda-saladino.vercel.app)

---

## Stack tecnológico

- **Frontend:** Next.js 15 (App Router), TypeScript, Tailwind CSS
- **Backend / Base de datos:** Supabase (PostgreSQL + Auth + Storage + RLS)
- **Deploy:** Vercel
- **PWA:** Instalable como app en Android e iOS

---

## Funcionalidades

### Tienda
- Catálogo de productos con filtro por categoría
- Búsqueda en tiempo real con debounce
- Página de producto con galería de imágenes múltiples
- Carrito persistente (localStorage)
- Flujo de compra vía WhatsApp (sin pasarela de pagos)
- Favoritos con persistencia
- Sistema de autenticación completo (registro, login, logout)
- Historial de pedidos por usuario
- Gift Card con animación flip
- Diseño responsive + PWA instalable

### Panel de administración (`/admin`)
- Acceso protegido por rol (`admin`) con RLS en Supabase
- CRUD completo de productos con subida de imágenes múltiples a Supabase Storage
- Gestión de pedidos con cambio de estados (pendiente → confirmado → enviado → entregado)
- Estadísticas: ventas totales, pedidos por estado, productos más vendidos
- Redirect automático al admin al loguearse como administrador

---

## Arquitectura

```
src/
├── app/                  # Rutas Next.js App Router
│   ├── admin/            # Panel de administración (protegido)
│   ├── catalogo/         # Catálogo general
│   ├── categoria/[slug]/ # Categorías dinámicas
│   ├── producto/[slug]/  # Página de producto dinámica
│   ├── perfil/           # Perfil y historial de pedidos
│   ├── favoritos/        # Lista de favoritos
│   └── gift-card/        # Página Gift Card
├── components/
│   ├── admin/            # Componentes del panel admin
│   ├── Header.tsx        # Header con scroll hide/show
│   ├── Footer.tsx        # Footer con links y contacto
│   ├── Cart.tsx          # Carrito lateral con checkout WhatsApp
│   ├── ProductDetail.tsx # Página de producto
│   ├── AuthModal.tsx     # Modal login/registro
│   └── ...
├── context/
│   ├── CartContext.tsx   # Estado global del carrito
│   └── FavoritesContext.tsx
├── hooks/
│   └── useScrollHeader.ts
└── lib/
    └── supabase.ts       # Cliente Supabase
```

---

## Base de datos (Supabase)

| Tabla | Descripción |
|-------|-------------|
| `products` | Productos con slug, imágenes, stock, featured |
| `orders` | Pedidos con items en JSONB, estado y user_id |
| `profiles` | Perfiles de usuario con rol (user/admin) |

Todas las tablas tienen **Row Level Security (RLS)** configurado.

---

## Variables de entorno

```env
NEXT_PUBLIC_SUPABASE_URL=tu_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
```

---

## Instalación local

```bash
git clone https://github.com/VMGaray/fernanda-saladino.git
cd fernanda-saladino
npm install
cp .env.example .env.local  # completar con tus keys de Supabase
npm run dev
```

---

## Desarrollado por

**Victoria Garay** — Desarrolladora Frontend Freelance  
[@vmg.setup.ai](https://www.instagram.com/vmg.setup.ai/) · Argentina

---

*Proyecto freelance · 2026*