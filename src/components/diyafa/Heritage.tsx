import { motion } from "framer-motion";

const pillars = [
  {
    title: "Agriculture",
    text: "Blés tendres, oliveraies et maraîchage des plaines de la Chaouia.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
        <path d="M16 4 V28 M16 10 C10 10 8 14 8 18 M16 10 C22 10 24 14 24 18 M16 16 C12 16 10 19 10 22 M16 16 C20 16 22 19 22 22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Agroalimentaire",
    text: "Smen beldi, huile d'olive première pression, conserves d'antan.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
        <path d="M12 6 H20 V10 L22 12 V26 H10 V12 L12 10 Z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M14 16 H18 M14 20 H18" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Terroir",
    text: "Les Doukkala — mer, sel et fruits secs en héritage.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.2" />
        <path d="M4 20 C10 16 22 16 28 20 M4 14 C10 10 22 10 28 14" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
];

export function Heritage() {
  return (
    <section id="heritage" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[1fr_1.1fr] md:gap-24">
        <div>
          <span className="kicker text-xs uppercase tracking-[0.3em]">Chapitre 03 — L'âme</span>
          <h2 className="serif mt-6 text-5xl leading-[1] tracking-tight md:text-6xl">
            L'Héritage
            <br />
            des <span className="italic text-terracotta">Terres Fertiles</span>.
          </h2>
          <div className="mt-10 flex items-baseline gap-4">
            <span className="serif text-7xl italic text-saffron">«</span>
            <span className="serif text-sm italic text-ink/60">
              Terre Fertile, Saveurs d'Avenir.
            </span>
          </div>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-ink/75">
          <p>
            De la <span className="serif italic">Chaouia</span>, plaine généreuse et
            nourricière, jusqu'aux rivages des <span className="serif italic">Doukkala</span>,
            la région Casablanca-Settat porte une mémoire culinaire forgée par la patience
            des paysans, la rigueur des moissons et la lumière franche de l'Atlantique.
          </p>
          <p>
            Chaque plat de notre table puise dans ce sol : l'agneau élevé en pâturages
            ouverts, le potiron des champs sablonneux, l'huile d'olive arrachée à
            l'amertume, le smen affiné dans le silence des jarres.
          </p>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="mt-10 grid gap-px border border-ink/10 bg-ink/10 sm:grid-cols-3"
          >
            {pillars.map((p) => (
              <motion.li
                key={p.title}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                }}
                className="flex flex-col gap-4 bg-cream p-6"
              >
                <span className="text-terracotta">{p.icon}</span>
                <h3 className="serif text-xl">{p.title}</h3>
                <p className="text-xs leading-relaxed text-ink/60">{p.text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
