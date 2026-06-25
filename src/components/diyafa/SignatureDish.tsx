import { motion } from "framer-motion";
import { PlateFrame } from "./PlateFrame";
import dishImg from "@/assets/entree 3.jpeg";

const spices = [
  { name: "Safran de Taliouine", note: "Filaments rouge profond" },
  { name: "Smen beldi", note: "Beurre clarifié affiné" },
  { name: "Fruits secs", note: "Pruneaux, amandes, abricots" },
  { name: "Cannelle de Ceylan", note: "Bâtons entiers infusés" },
  { name: "Fleur d'oranger", note: "Distillation des Doukkala" },
];

export function SignatureDish() {
  return (
    <section
      id="plat"
      className="relative bg-ink px-6 py-28 text-cream md:px-10 md:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-[1.1fr_1fr] lg:gap-24">
        <PlateFrame
          label="Épaule d'agneau dokkali"
          caption="Pièce maîtresse"
          variant="ember"
          ratio="square"
          className="w-full"
          imageSrc={dishImg}
        />

        <div>
          <span className="kicker text-xs uppercase tracking-[0.3em] text-saffron">
            Chapitre 04 — La pièce maîtresse
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="serif mt-6 text-5xl leading-[1] md:text-6xl"
          >
            L'<span className="italic text-saffron">Épaule</span> d'Agneau
            <br />
            Dokkali.
          </motion.h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/75">
            Confite des heures durant dans son jus, l'épaule s'effiloche sous la
            cuillère. Elle rencontre les fruits secs caramélisés et le velouté
            d'épices anciennes — symbole de générosité, geste des grandes occasions
            et signature d'une table où l'on s'attable longtemps.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-px bg-cream/10 sm:grid-cols-3">
            {spices.map((s) => (
              <div key={s.name} className="bg-ink p-5">
                <p className="serif text-sm italic text-saffron">{s.name}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-cream/50">
                  {s.note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs uppercase tracking-[0.3em] text-cream/50">
            <span>Cuisson — 7 heures</span>
            <span className="h-px w-10 bg-cream/30" />
            <span>Service — au plat</span>
          </div>
        </div>
      </div>
    </section>
  );
}
