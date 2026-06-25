import { motion } from "framer-motion";
import { PlateFrame } from "./PlateFrame";
import teaImg from "@/assets/cadre.jpeg";

export function TeaRitual() {
  return (
    <section
      id="the"
      className="relative overflow-hidden px-6 py-28 md:px-10 md:py-36"
      style={{ background: "var(--cream-deep)" }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[1fr_1.2fr]">
        <PlateFrame
          label="Théière en argent"
          caption="Le rituel"
          variant="olive"
          ratio="square"
          className="w-full max-w-md"
          imageSrc={teaImg}
        />
        <div>
          <span className="kicker text-xs uppercase tracking-[0.3em]">
            Chapitre 06 — La clôture
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="serif mt-6 text-5xl leading-[1] md:text-6xl"
          >
            Le rituel du
            <br />
            <span className="italic text-terracotta">service du thé</span>.
          </motion.h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/75">
            Versé de haut, dans un geste hérité, le thé à la menthe vient sceller la
            <span className="serif italic"> Diyafa</span>. Trois verres, trois temps —
            doux comme la vie, fort comme l'amitié, amer comme la mort. C'est le
            dernier mot, celui que l'on prolonge sans se presser.
          </p>
          <div className="mt-10 flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-ink/50">
            <span>Menthe fraîche</span>
            <span className="h-px w-8 bg-ink/30" />
            <span>Thé vert Gunpowder</span>
            <span className="hidden h-px w-8 bg-ink/30 md:block" />
            <span className="hidden md:inline">Sucre de canne</span>
          </div>
        </div>
      </div>
    </section>
  );
}
