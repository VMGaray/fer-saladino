"use client";
import { useState } from "react";

export default function GiftCardView() {
  const [flipped, setFlipped] = useState(false);
  const [hinted, setHinted] = useState(false);

  const handleFlip = () => {
    setFlipped(f => !f);
    if (!hinted) setHinted(true);
  };

  return (
    <main className="min-h-screen bg-brand-black text-brand-light">
      <div className="container mx-auto px-6 py-20">

        {/* Título página */}
        <div
          className="text-center mb-16"
          style={{ borderBottom: "1px solid rgba(212,175,55,0.08)", paddingBottom: "40px" }}
        >
          <p className="text-[9px] tracking-[0.5em] uppercase text-brand-silver/40 mb-3">
            Regalos
          </p>
          <h2
            className="font-light uppercase"
            style={{ fontSize: "clamp(22px, 4vw, 36px)", letterSpacing: "0.4em" }}
          >
            Gift Card
          </h2>
        </div>

        {/* Card flip */}
        <div className="flex flex-col items-center gap-6">
          <div
            style={{ perspective: "1000px", width: "340px", height: "210px", cursor: "pointer" }}
            onClick={handleFlip}
            role="button"
            aria-label="Ver gift card"
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                transformStyle: "preserve-3d",
                transition: "transform 0.6s ease",
                transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* Cara delantera */}
              <div
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  background: "#D4AF37",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "72px",
                    fontWeight: 300,
                    color: "#121212",
                    lineHeight: 1,
                    letterSpacing: "0.05em",
                  }}
                >
                  FS
                </span>
                <div
                  style={{
                    width: "40px",
                    height: "1px",
                    background: "rgba(18,18,18,0.35)",
                    margin: "12px 0",
                  }}
                />
                <span
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.45em",
                    textTransform: "uppercase",
                    color: "#121212",
                    fontWeight: 400,
                  }}
                >
                  Gift Card
                </span>
              </div>

              {/* Cara trasera */}
              <div
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  transform: "rotateY(180deg)",
                  background: "#121212",
                  border: "1px solid rgba(212,175,55,0.3)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "28px 32px",
                  boxSizing: "border-box",
                  gap: "12px",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "#D4AF37",
                    fontWeight: 300,
                    margin: 0,
                    textAlign: "center",
                  }}
                >
                  El regalo perfecto
                </p>
                <p
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.08em",
                    color: "rgba(245,245,247,0.5)",
                    fontWeight: 300,
                    margin: 0,
                    textAlign: "center",
                    lineHeight: 1.7,
                  }}
                >
                  Podés solicitar una gift card por el monto que desees.
                  La coordinamos personalmente.
                </p>
                <a
                  href="https://wa.me/5491151818438?text=Hola Fernanda, quiero consultar sobre una Gift Card."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  style={{
                    marginTop: "4px",
                    padding: "9px 20px",
                    background: "transparent",
                    border: "1px solid rgba(212,175,55,0.5)",
                    color: "#D4AF37",
                    fontSize: "9px",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    fontWeight: 300,
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Hint */}
          <p
            style={{
              fontSize: "9px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(245,245,247,0.25)",
              fontWeight: 300,
              transition: "opacity 0.4s ease",
              opacity: hinted ? 0 : 1,
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            Tocá la tarjeta para ver más
          </p>
        </div>
      </div>
    </main>
  );
}
