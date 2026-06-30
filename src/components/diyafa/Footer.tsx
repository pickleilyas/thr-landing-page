import logoImg from "@/assets/logo png.png";
import cmcLogo from "@/assets/cmc.png";
import officeLogo from "@/assets/office.png";
import tyabLogo from "@/assets/tyab.png";

export function Footer() {
  return (
    <footer className="border-t border-ink/15 bg-cream px-6 py-14 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-md">
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <img
                src={logoImg}
                alt="Patritalent — Un saveur d'hier, talent d'aujourd'hui"
                className="h-[80px] w-auto md:h-[110px]"
                loading="lazy"
              />
              <span className="hidden h-12 w-px bg-ink/15 sm:block" />
              <div className="flex items-center gap-3">
                <img
                  src={officeLogo}
                  alt="Office"
                  className="h-8 w-auto object-contain md:h-12"
                  loading="lazy"
                />
                <img
                  src={cmcLogo}
                  alt="CMC"
                  className="h-8 w-auto object-contain md:h-12"
                  loading="lazy"
                />
                <img
                  src={tyabLogo}
                  alt="Tyab"
                  className="h-8 w-auto object-contain md:h-12"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="serif text-xs italic text-ink/60">
              Concours de l'Hospitalité à travers la Gastronomie
            </p>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-ink/55">
            « Terre Fertile, Saveurs d'Avenir. » — Un hommage aux producteurs,
            artisans et jeunes talents de Casablanca-Settat.
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.25em] text-ink/60">
          <a href="#top" className="hover:text-ink">Retour en haut</a>
          <a href="#heritage" className="hover:text-ink">Héritage</a>
          <a href="#plat" className="hover:text-ink">Le plat</a>
          <a href="#reserver" className="hover:text-ink">Réserver</a>
          <span className="hidden h-3 w-px bg-ink/30 md:block" />
          <a href="#" aria-label="Instagram" className="hover:text-ink">Instagram</a>
          <a href="#" aria-label="LinkedIn" className="hover:text-ink">LinkedIn</a>
        </nav>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-start justify-between gap-3 border-t border-ink/10 pt-6 text-[10px] uppercase tracking-[0.3em] text-ink/40 sm:flex-row sm:items-center">
        <span>© {new Date().getFullYear()} Patritalent — Tous droits réservés</span>
        <span className="serif italic normal-case tracking-normal">
          Mentions & crédits — Une création éditoriale du terroir
        </span>
      </div>
    </footer>
  );
}
