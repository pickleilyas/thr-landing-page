import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export function ReservationForm() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Votre demande a été reçue", {
        description: "Notre équipe vous recontactera sous 24h pour confirmer.",
      });
    }, 700);
  }

  return (
    <section id="reserver" className="relative bg-ink px-6 py-28 text-cream md:px-10 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1fr_1.1fr] md:gap-20">
        <div>
          <span className="kicker text-xs uppercase tracking-[0.3em] text-saffron">
            Chapitre 07 — L'invitation
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="serif mt-6 text-5xl leading-[1] md:text-6xl"
          >
            Vivez l'expérience
            <br />
            <span className="italic text-saffron">gastronomique</span>.
          </motion.h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-cream/70">
            Une table, un soir, une histoire. Confiez-nous vos envies — nous prendrons
            le temps qu'il faut pour répondre, comme l'on prépare un repas qui compte.
          </p>

          <dl className="mt-12 space-y-6 text-sm">
            <div className="flex items-baseline gap-4">
              <dt className="serif w-24 text-xs uppercase tracking-[0.25em] text-cream/40">Lieu</dt>
              <dd className="serif italic text-cream/90">Casablanca-Settat, Maroc</dd>
            </div>
            <div className="flex items-baseline gap-4">
              <dt className="serif w-24 text-xs uppercase tracking-[0.25em] text-cream/40">Contact</dt>
              <dd className="serif italic text-cream/90">contact@diyafa.ma</dd>
            </div>
            <div className="flex items-baseline gap-4">
              <dt className="serif w-24 text-xs uppercase tracking-[0.25em] text-cream/40">Saison</dt>
              <dd className="serif italic text-cream/90">Sur réservation, toute l'année</dd>
            </div>
          </dl>

          <p className="serif mt-12 max-w-md text-xs italic text-cream/50">
            Avec nos remerciements au jury du Concours de l'Hospitalité à travers la
            Gastronomie, pour l'encouragement des jeunes talents du terroir.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          <Field label="Nom complet" name="name" required />
          <Field label="Téléphone" name="phone" type="tel" />
          <Field label="Email" name="email" type="email" required className="sm:col-span-2" />
          <Field label="Date souhaitée" name="date" type="date" />
          <Field label="Nombre de convives" name="guests" type="number" min={2} max={40} defaultValue={6} />
          <div className="sm:col-span-2">
            <label className="serif block text-[10px] uppercase tracking-[0.3em] text-cream/50">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Occasion, préférences, allergies…"
              className="serif mt-2 w-full border-b border-cream/20 bg-transparent py-3 text-sm italic text-cream placeholder:text-cream/30 focus:border-saffron focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="serif group sm:col-span-2 mt-4 inline-flex items-center justify-between gap-3 border border-cream/30 bg-transparent px-7 py-5 text-sm uppercase tracking-[0.25em] text-cream transition hover:border-saffron hover:bg-saffron hover:text-ink disabled:opacity-60"
          >
            <span>{submitting ? "Envoi en cours…" : "Demander une réservation"}</span>
            <span className="transition-transform group-hover:translate-x-2">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
  min?: number;
  max?: number;
  defaultValue?: string | number;
}

function Field({ label, name, type = "text", required, className = "", ...rest }: FieldProps) {
  return (
    <label className={`block ${className}`}>
      <span className="serif block text-[10px] uppercase tracking-[0.3em] text-cream/50">
        {label}
        {required && <span className="ml-1 text-saffron">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        {...rest}
        className="serif mt-2 w-full border-b border-cream/20 bg-transparent py-3 text-sm italic text-cream placeholder:text-cream/30 focus:border-saffron focus:outline-none [color-scheme:dark]"
      />
    </label>
  );
}
