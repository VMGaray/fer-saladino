import type { Metadata } from "next";
import GiftCardView from "../../components/GiftCardView";

export const metadata: Metadata = {
  title: "Gift Card",
  description: "Regalá una gift card de Fernanda Saladino. El regalo perfecto para quien ama el cuero artesanal argentino.",
};

export default function GiftCardPage() {
  return <GiftCardView />;
}
