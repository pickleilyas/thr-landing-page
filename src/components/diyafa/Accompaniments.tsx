import { motion } from "framer-motion";
import { PlateFrame } from "./PlateFrame";
import { ZelligeDivider } from "./ZelligeDivider";

import entree1 from "@/assets/entree 1.jpeg";
import entree2 from "@/assets/entree 2.jpeg";
import entree3 from "@/assets/entree 3.jpeg";

const dishes = [
  {
    n: "I",
    name: "Potiron M'assel",
    sub: "façon Doukkala",
    desc: "Potiron confit au miel sombre, cannelle et fleur d'oranger — une douceur ambrée qui appelle le pain chaud.",
    signature: "Fleur d'oranger",
    variant: "saffron" as const,
    imageSrc: entree1,
  },
  {
    n: "II",
    name: "Khobiza & Épinard",
    sub: "revisités",
    desc: "Mauve sauvage des champs, épinards tendres, citron confit et huile d'olive première pression à froid.",
    signature: "Citron confit",
    variant: "olive" as const,
    imageSrc: entree2,
  },
  {
    n: "III",
    name: "Zalouk d'Aubergine",
    sub: "façon caviar",
    desc: "Aubergines fumées au feu de bois, tomates concassées, cumin et ail — la fraîcheur du marché en bouche.",
    signature: "Aubergine fumée",
    variant: "ember" as const,
    imageSrc: entree3,
  },
];

export function Accompaniments() {
  return (
    <section id="accompagnements" className="px-6 py-28 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <span className="kicker text-xs uppercase tracking-[0.3em]">
            Chapitre 05 — Le trio
          </span>
          <h2 className="serif mt-6 text-5xl leading-[1] tracking-tight md:text-6xl">
            Trois <span className="italic text-terracotta">accompagnements</span>,
            <br />
            trois signatures du terroir.
          </h2>
          <ZelligeDivider className="mt-8" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          className="mt-20 grid gap-10 md:grid-cols-3 md:gap-8"
        >
          {dishes.map((d) => (
            <motion.article
              key={d.n}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="group flex flex-col"
            >
              <PlateFrame
                label={d.name}
                caption={d.n}
                variant={d.variant}
                ratio="portrait"
                className="w-full transition-transform duration-700 group-hover:-translate-y-2"
                imageSrc={d.imageSrc}
              />
              <div className="mt-6 flex items-baseline gap-4">
                <span className="serif text-3xl italic text-saffron">{d.n}.</span>
                <div>
                  <h3 className="serif text-2xl leading-tight">{d.name}</h3>
                  <p className="serif text-sm italic text-ink/60">{d.sub}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">{d.desc}</p>
              <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-terracotta">
                <span className="h-px w-6 bg-terracotta/50" />
                <span>{d.signature}</span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
