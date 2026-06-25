import { useEffect, useState } from "react";
import logoImg from "@/assets/logo png.png";

const links = [
  { href: "#heritage", label: "Héritage" },
  { href: "#plat", label: "Le Plat" },
  { href: "#accompagnements", label: "Trio" },
  { href: "#the", label: "Thé" },
  { href: "#reserver", label: "Réserver" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-md border-b border-ink/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center">
          <img
            src={logoImg}
            alt="Patritalent — Un saveur d'hier, talent d'aujourd'hui"
            className="h-16 w-auto md:h-20"
            loading="eager"
          />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.2em] text-ink/70 transition hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#reserver"
          className="serif group hidden items-center gap-2 border-b border-ink/40 pb-1 text-sm italic text-ink transition hover:border-saffron hover:text-saffron md:inline-flex"
        >
          Réserver l'expérience
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </header>
  );
}
