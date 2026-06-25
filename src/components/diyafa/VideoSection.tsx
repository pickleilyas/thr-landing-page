import { motion } from "framer-motion";
import { ZelligeDivider } from "./ZelligeDivider";

export function VideoSection() {
  return (
    <section className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <span className="kicker text-xs uppercase tracking-[0.3em]">Chapitre 02</span>
          <h2 className="serif mt-4 text-4xl md:text-5xl">
            L'Art de la <span className="italic text-terracotta">Diyafa</span> en mouvement
          </h2>
          <p className="mt-4 max-w-xl text-sm text-ink/60">
            Le geste, la fumée, la main qui dresse — quelques minutes pour ressentir
            l'âme d'une table marocaine.
          </p>
          <ZelligeDivider className="mt-6" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-12 aspect-video w-full overflow-hidden border border-ink/15"
          style={{ boxShadow: "var(--shadow-warm)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.25_0.04_50)] via-[oklch(0.18_0.03_40)] to-[oklch(0.12_0.02_30)]" />
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "radial-gradient(oklch(1 0 0 / 0.4) 1px, transparent 1px)",
              backgroundSize: "4px 4px",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.5_0.15_50/0.4),transparent_70%)]" />

          <button
            type="button"
            aria-label="Lire la vidéo"
            className="group absolute inset-0 grid place-items-center"
          >
            <span className="relative grid h-24 w-24 place-items-center rounded-full border border-cream/40 backdrop-blur-sm transition group-hover:scale-110 group-hover:border-saffron">
              <span className="absolute inset-0 animate-ping rounded-full border border-cream/30" />
              <svg width="22" height="26" viewBox="0 0 22 26" fill="currentColor" className="ml-1 text-cream">
                <path d="M0 0 L22 13 L0 26 Z" />
              </svg>
            </span>
          </button>

          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-6 py-5 text-cream/70">
            <span className="serif text-xs italic uppercase tracking-[0.3em]">
              Teaser — La table dressée
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em]">00:00 / 02:14</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
