import { motion } from "framer-motion";
import { PlateFrame } from "./PlateFrame";
import heroImg from "@/assets/tablethr.jpeg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      {/* decorative wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-warm)" }}
      />
      <div className="mx-auto grid max-w-7xl items-end gap-12 px-6 md:grid-cols-[1.2fr_1fr] md:px-10 lg:gap-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="kicker text-sm md:text-base"
          >
            — Célébrons l'Art de Recevoir à la Marocaine
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="serif mt-6 text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] tracking-tight"
          >
            La Table de la
            <br />
            <span className="italic text-terracotta">Diyafa</span> Marocaine.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg"
          >
            Une réinterprétation contemporaine de l'hospitalité et de la gastronomie
            de la région <span className="serif italic">Casablanca-Settat</span> —
            entre la générosité de la Chaouia et le raffinement des Doukkala.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center gap-6"
          >
            <a
              href="#plat"
              className="serif group inline-flex items-center gap-3 bg-ink px-7 py-4 text-sm uppercase tracking-[0.22em] text-cream transition hover:bg-terracotta"
            >
              Découvrir le menu
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#reserver"
              className="serif inline-flex items-center gap-2 border-b border-ink/40 pb-1 italic text-ink transition hover:border-saffron hover:text-saffron"
            >
              Réserver l'expérience
            </a>
          </motion.div>

          <div className="mt-16 flex items-center gap-10 text-xs uppercase tracking-[0.25em] text-ink/50">
            <span>Édition I</span>
            <span className="h-px w-10 bg-ink/30" />
            <span>Chaouia · Doukkala</span>
            <span className="hidden h-px w-10 bg-ink/30 md:block" />
            <span className="hidden md:inline">Saison 2026</span>
          </div>
        </div>

        <div className="relative">
          <PlateFrame
            label="Épaule d'agneau dokkali"
            caption="Pièce maîtresse"
            variant="ember"
            ratio="portrait"
            className="ml-auto w-full max-w-md"
            imageSrc={heroImg}
          />
          <div className="absolute -left-8 -bottom-8 hidden h-32 w-32 border border-ink/15 md:block" />
          <div className="absolute -right-4 -top-4 hidden h-20 w-20 bg-saffron/20 md:block" />
        </div>
      </div>
    </section>
  );
}
