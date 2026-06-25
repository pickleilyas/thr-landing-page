# La Table de la Diyafa Marocaine — Site One-Page

Site React (TanStack Start, déjà en place) à vocation commerciale, en français, qui met en valeur la cuisine de la région Casablanca-Settat. Direction visuelle : **éditorial luxe "Saffron & Ink"** — fond crème chaud, typographie serif déployée, accents safran/terracotta/noir d'encre, mise en page magazine asymétrique, motifs zellige discrets.

## Direction de design

- **Palette** : crème ivoire `#F5EFE4`, encre noire `#1A1410`, safran `#C6802A`, terracotta `#A8472A`, vert olive sourd `#5C6B3F`.
- **Typographie** : Cormorant Garamond (display serif) + Inter (corps), via `<link>` Google Fonts dans `__root.tsx`. Headlines généreuses, kerning serré, italiques pour les sur-titres.
- **Composition** : grilles asymétriques type magazine, énormes blancs, filets fins, séparateurs zellige géométriques en SVG inline.
- **Motion** : reveal-on-scroll doux (framer-motion), léger parallax sur les cadres-plats, hover-lift discret sur les cards.
- **Visuels** : aucun vrai photo — chaque emplacement plat = "cadre éditorial" stylé (dégradé chaud, monogramme central, légende prompt) prêt à remplacer plus tard.

## Sections (single page, ancrages)

1. **Nav fixe minimaliste** — monogramme à gauche, liens d'ancre (Héritage, Plat, Accompagnements, Réserver), CTA discret.
2. **Hero** — sur-titre italique « Célébrons l'Art de Recevoir à la Marocaine », H1 serif XXL « La Table de la Diyafa Marocaine », sous-titre, double CTA (Découvrir le Menu / Réserver). Cadre-plat asymétrique à droite + filet zellige.
3. **Vidéo immersion** — conteneur 16:9 avec play button minimal, légende « L'Art de la Diyafa en Mouvement ».
4. **Héritage / Storytelling** — bloc deux colonnes : texte court sur Chaouia & Doukkala + trois badges-icônes (Agriculture, Agroalimentaire, Terroir).
5. **Pièce maîtresse — Épaule d'Agneau Dokkali** — split asymétrique : grand cadre-plat à gauche, narratif à droite, liste d'épices (safran, smen beldi, fruits secs) en sidenote.
6. **Trio de Terroir** — grille 3 colonnes : Potiron M'assel / Khobiza & Épinard / Zalouk d'Aubergine. Chaque card = cadre image + nom serif + description courte + ingrédient signature.
7. **Rituel du Thé** — bande horizontale calme, citation centrée, cadre théière stylé.
8. **Réservation (CTA final)** — formulaire UI-only : Nom, Email, Téléphone, Date souhaitée, Nombre de convives, Message. Bouton « Demander une réservation ». Petit mot de réassurance équipe/jury.
9. **Footer** — logo concours, mentions, retour en haut, placeholders réseaux sociaux.

## Détails techniques

- **Stack** : route unique `src/routes/index.tsx` remplace le placeholder. Composants découpés dans `src/components/diyafa/` (Nav, Hero, VideoSection, Heritage, SignatureDish, Accompaniments, TeaRitual, ReservationForm, Footer, PlateFrame, ZelligeDivider).
- **Tokens de design** : ajoutés dans `src/styles.css` sous `@theme` (couleurs sémantiques, polices) + variables `--gradient-saffron`, `--shadow-warm`.
- **Polices** : `<link>` Google Fonts (Cormorant Garamond, Inter) dans `head()` de `__root.tsx`.
- **Animations** : `bun add framer-motion` ; variants reveal-on-scroll partagées.
- **SEO** : `head()` de `index.tsx` avec title <60c, meta description <160c, og:title/description, lang fr, H1 unique.
- **Formulaire** : `useState` local, validation simple, toast de confirmation (shadcn `sonner` déjà dispo), aucun envoi backend.
- **Responsive** : mobile-first, grilles s'effondrent en stack, typographie fluide (`clamp()`), nav devient sheet.
- **Accessibilité** : alt text descriptif sur cadres, focus visibles, contraste AA vérifié.

## Hors scope

- Pas d'envoi réel du formulaire (pas de Lovable Cloud).
- Pas de vraies photos ni vidéo — placeholders stylés uniquement.
- Pas de CMS, pas de multi-pages.
