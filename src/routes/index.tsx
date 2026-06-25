import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/diyafa/Nav";
import { Hero } from "@/components/diyafa/Hero";
import { VideoSection } from "@/components/diyafa/VideoSection";
import { Heritage } from "@/components/diyafa/Heritage";
import { SignatureDish } from "@/components/diyafa/SignatureDish";
import { Accompaniments } from "@/components/diyafa/Accompaniments";
import { TeaRitual } from "@/components/diyafa/TeaRitual";
import { ReservationForm } from "@/components/diyafa/ReservationForm";
import { Footer } from "@/components/diyafa/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Patritalent — Concours de l'Hospitalité à travers la Gastronomie" },
      {
        name: "description",
        content:
          "Une réinterprétation contemporaine de l'hospitalité et de la gastronomie de Casablanca-Settat. Épaule d'agneau dokkali, trio de terroir, rituel du thé.",
      },
      { property: "og:title", content: "Patritalent — Concours de l'Hospitalité à travers la Gastronomie" },
      {
        property: "og:description",
        content:
          "Patritalent — l'art de recevoir à la marocaine, entre Chaouia et Doukkala.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <VideoSection />
      <Heritage />
      <SignatureDish />
      <Accompaniments />
      <TeaRitual />
      <ReservationForm />
      <Footer />
      <Toaster position="bottom-right" />
    </main>
  );
}
