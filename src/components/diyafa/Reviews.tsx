import { useState, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { toast } from "sonner";

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const INITIAL_REVIEWS: Review[] = [
  {
    id: "1",
    name: "Sofia Bennani",
    rating: 5,
    comment: "Une expérience gastronomique inoubliable. L'épaule d'agneau dokkali fond littéralement en bouche, et le raffinement du service de table de Halima Boudili reflète le grand art de l'hospitalité marocaine.",
    date: "24 juin 2026",
  },
  {
    id: "2",
    name: "Karim El Amrani",
    rating: 5,
    comment: "Le rituel du thé et le trio de terroir sont d'une justesse remarquable. Une immersion complète dans la tradition culinaire de Doukkala réinventée avec brio.",
    date: "18 juin 2026",
  },
  {
    id: "3",
    name: "Marie Dubois",
    rating: 4,
    comment: "L'excellence à l'état pur. On ressent la passion et la synergie de toute l'équipe dans chaque détail. Le service est impeccable et les saveurs du terroir sont magnifiées.",
    date: "10 juin 2026",
  },
];

const LOCAL_STORAGE_KEY = "patritalent_reviews";

export function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Load persisted reviews on client mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved) as Review[];
          setReviews([...parsed, ...INITIAL_REVIEWS]);
        } catch (e) {
          console.error("Error loading reviews from localStorage", e);
        }
      }
    }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) {
      toast.error("Veuillez remplir tous les champs requis.");
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      const newReview: Review = {
        id: Date.now().toString(),
        name: name.trim(),
        rating,
        comment: comment.trim(),
        date: new Date().toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      };

      // Add to state (prepend)
      const updatedLocalReviews = [newReview, ...reviews.filter(r => !INITIAL_REVIEWS.some(ir => ir.id === r.id))];
      setReviews([newReview, ...reviews]);

      // Save user submitted reviews only to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedLocalReviews));
      }

      // Reset form
      setName("");
      setComment("");
      setRating(5);
      setSubmitting(false);

      toast.success("Votre commentaire a été publié", {
        description: "Merci de partager votre expérience avec nous.",
      });
    }, 600);
  };

  return (
    <section id="commentaires" className="relative bg-cream-deep/20 px-6 py-24 md:px-10 md:py-32 border-t border-b border-ink/5">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
          
          {/* Left Column: Form */}
          <div className="flex flex-col justify-start">
            <span className="kicker text-xs uppercase tracking-[0.3em] text-terracotta">
              Chapitre 08 — Le Livre d'Or
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="serif mt-6 text-4xl leading-[1.1] md:text-5xl lg:text-6xl text-ink"
            >
              Partagez votre <br />
              <span className="italic text-terracotta">ressenti</span>.
            </motion.h2>
            <p className="mt-6 text-sm md:text-base leading-relaxed text-ink/70 max-w-md">
              Votre avis compte énormément pour les jeunes talents de l'hôtellerie et de la gastronomie. Laissez un message pour encourager notre équipe.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6 max-w-md">
              <div>
                <span className="serif block text-[10px] uppercase tracking-[0.3em] text-ink/50 mb-2">
                  Votre Note *
                </span>
                <div className="flex gap-1.5 items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(null)}
                      className="cursor-pointer transition-transform duration-100 hover:scale-115 focus:outline-none"
                    >
                      <Star
                        className={`h-6 w-6 transition-colors duration-150 ${
                          star <= (hoveredRating ?? rating)
                            ? "fill-saffron stroke-saffron"
                            : "stroke-ink/30 fill-transparent"
                        }`}
                      />
                    </button>
                  ))}
                  <span className="serif text-xs italic text-ink/50 ml-2">
                    {rating} sur 5
                  </span>
                </div>
              </div>

              <div className="block">
                <span className="serif block text-[10px] uppercase tracking-[0.3em] text-ink/50">
                  Nom complet *
                </span>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Ex. Sofia Bennani"
                  className="serif mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-sm italic text-ink placeholder:text-ink/30 focus:border-terracotta focus:outline-none"
                />
              </div>

              <div className="block">
                <span className="serif block text-[10px] uppercase tracking-[0.3em] text-ink/50">
                  Commentaire / Message *
                </span>
                <textarea
                  name="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                  rows={4}
                  placeholder="Partagez vos impressions sur la cuisine, le service ou le rituel..."
                  className="serif mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-sm italic text-ink placeholder:text-ink/30 focus:border-terracotta focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="serif group w-full mt-4 inline-flex items-center justify-between gap-3 border border-ink/20 bg-transparent px-6 py-4 text-xs uppercase tracking-[0.25em] text-ink transition hover:border-terracotta hover:bg-terracotta hover:text-cream disabled:opacity-60"
              >
                <span>{submitting ? "Publication..." : "Publier mon avis"}</span>
                <span className="transition-transform group-hover:translate-x-2">→</span>
              </button>
            </form>
          </div>

          {/* Right Column: Reviews List */}
          <div className="flex flex-col">
            <h3 className="serif text-xs uppercase tracking-[0.2em] text-ink/40 mb-8 border-b border-ink/10 pb-4">
              Témoignages récents ({reviews.length})
            </h3>
            
            <div className="max-h-[580px] overflow-y-auto pr-2 space-y-6 scrollbar-thin scrollbar-thumb-ink/10 scrollbar-track-transparent">
              <AnimatePresence initial={false}>
                {reviews.map((rev) => (
                  <motion.div
                    key={rev.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="p-6 bg-background border border-ink/5 rounded-sm shadow-soft relative flex flex-col"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="serif text-lg text-ink font-medium">{rev.name}</h4>
                        <div className="flex gap-0.5 mt-1.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-3.5 w-3.5 ${
                                star <= rev.rating
                                  ? "fill-saffron stroke-saffron"
                                  : "stroke-ink/20 fill-transparent"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-ink/40 whitespace-nowrap">
                        {rev.date}
                      </span>
                    </div>
                    <p className="serif italic text-sm text-ink/80 mt-4 leading-relaxed">
                      "{rev.comment}"
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
