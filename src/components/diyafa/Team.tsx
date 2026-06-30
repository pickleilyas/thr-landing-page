import { motion } from "framer-motion";
import member1 from "@/assets/membre1.jpeg";
import member2 from "@/assets/membre2.jpeg";
import member3 from "@/assets/membre3.jpeg";

const teamMembers = [
  {
    image: member1,
    name: "Halima Boudili",
    role: "Service art de table",
    organization: "Cité des Métiers et des Compétences Casablanca-Settat"
  },
  {
    image: member2,
    name: "Zguiri Zineb ",
    role: "Service art culinaire",
    organization: "Institut spécialisé d’hôtellerie et de tourisme El haouzia"
  },
  {
    image: member3,
    name: "Hajji M'barrek",
    role: "Service art culinaire",
    organization: "Institut spécialisé d’hôtellerie et de tourisme El haouzia"
  }
];

export function Team() {
  return (
    <section id="equipe" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 md:mb-24 text-center flex flex-col items-center">
          <span className="kicker text-xs uppercase tracking-[0.3em] text-ink/60">Chapitre 07 — L'Équipe</span>
          <h2 className="serif mt-6 text-4xl leading-[1] tracking-tight md:text-5xl lg:text-6xl max-w-2xl">
            L'Équipe <span className="italic text-terracotta">Patritalent</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {teamMembers.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="group relative flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name || `Membre de l'équipe ${idx + 1}`} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/10 mix-blend-multiply transition-opacity group-hover:opacity-0" />
              </div>
              
              {(member.name || member.role) && (
                <div className="mt-6 text-center">
                  {member.name && <h3 className="serif text-xl">{member.name}</h3>}
                  {member.role && (
                    <p className="mt-2 text-sm text-ink/70">
                      {member.role}
                      {member.organization && (
                        <>
                          <br />
                          <span className="text-xs text-ink/50 uppercase tracking-[0.1em]">{member.organization}</span>
                        </>
                      )}
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
