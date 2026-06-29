import { motion } from "framer-motion";

interface PlateFrameProps {
  label: string;
  caption?: string;
  variant?: "warm" | "ember" | "olive" | "saffron";
  className?: string;
  ratio?: "square" | "portrait" | "landscape" | "wide";
  imageSrc?: string;
}

const variants = {
  warm: "from-[oklch(0.82_0.09_70)] via-[oklch(0.65_0.12_45)] to-[oklch(0.4_0.08_30)]",
  ember: "from-[oklch(0.75_0.13_55)] via-[oklch(0.5_0.16_35)] to-[oklch(0.28_0.09_30)]",
  olive: "from-[oklch(0.7_0.06_110)] via-[oklch(0.5_0.06_100)] to-[oklch(0.3_0.04_90)]",
  saffron: "from-[oklch(0.88_0.1_85)] via-[oklch(0.7_0.14_65)] to-[oklch(0.45_0.12_45)]",
};

const ratios = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/10]",
};

export function PlateFrame({
  label,
  caption,
  variant = "warm",
  className = "",
  ratio = "portrait",
  imageSrc,
}: PlateFrameProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden ${ratios[ratio]} ${className}`}
      style={{ boxShadow: "var(--shadow-warm)" }}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={label}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${variants[variant]}`}
        />
      )}
      {/* grain */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(oklch(0.2 0 0 / 0.4) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />
      {/* spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_25%,oklch(1_0_0/0.35),transparent_55%)]" />
      {/* caption */}
      <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
        <span className="serif text-xs italic uppercase tracking-[0.25em] text-cream/80">
          {label}
        </span>
        {caption && (
          <span className="text-[10px] uppercase tracking-[0.2em] text-cream/60">
            {caption}
          </span>
        )}
      </figcaption>
      {/* corner mark */}
      <span className="absolute left-5 top-5 h-px w-8 bg-cream/60" />
      <span className="absolute left-5 top-5 h-8 w-px bg-cream/60" />
      <span className="absolute right-5 top-5 h-px w-8 bg-cream/60" />
      <span className="absolute right-5 top-5 h-8 w-px bg-cream/60" />
    </motion.figure>
  );
}
