import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ZelligeDivider } from "./ZelligeDivider";
import videoFile from "@/assets/video.mp4";

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

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
          <video
            ref={videoRef}
            src={videoFile}
            className="h-full w-full object-cover"
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            controls={isPlaying}
          />

          {!isPlaying && (
            <button
              onClick={togglePlay}
              type="button"
              aria-label="Lire la vidéo"
              className="group absolute inset-0 grid place-items-center bg-black/30 transition-colors hover:bg-black/40"
            >
              <span className="relative grid h-24 w-24 place-items-center rounded-full border border-cream/40 backdrop-blur-sm transition group-hover:scale-110 group-hover:border-saffron">
                <span className="absolute inset-0 animate-ping rounded-full border border-cream/30" />
                <svg width="22" height="26" viewBox="0 0 22 26" fill="currentColor" className="ml-1 text-cream">
                  <path d="M0 0 L22 13 L0 26 Z" />
                </svg>
              </span>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
