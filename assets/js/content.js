/* =====================================================================
   CONTENU DU PORTFOLIO  —  PORTFOLIO CONTENT
   ---------------------------------------------------------------------
   The easiest way to edit this file: open  editor.html  in your browser.
   Le plus simple : ouvrez  editor.html  dans votre navigateur.

   If you edit by hand (Notepad, VS Code…):
   • Every text in two languages looks like:  { fr: "…", en: "…" }
   • Keep the quotes "…" and the commas , between items.
   • To use a quote inside a text, write  \"  (or use ’ instead of ').
   • Leave a field empty ("") to hide it on the site.
   ===================================================================== */

window.PORTFOLIO = {

  /* ---------- SIDEBAR / BARRE LATÉRALE ---------- */
  profile: {
    name: "Mohammed Samy BEJJTIT",
    title: { fr: "Élève-ingénieur · Énergie électrique & Automatique", en: "Engineering student · Electrical Energy & Control" },
    photo: "./assets/images/temporary_pic.png",
    email: "bejjtitsamy@gmail.com",
    phones: ["+33 6 05 67 24 04", "+212 6 28 95 63 51"],
    location: { fr: "Toulouse, France", en: "Toulouse, France" },
    linkedin: "",          // ex: "https://www.linkedin.com/in/votre-profil"
    github: "",            // ex: "https://github.com/votre-nom"
    cvFr: "",              // ex: "./assets/docs/CV_FR.pdf"
    cvEn: ""               // ex: "./assets/docs/CV_EN.pdf"
  },

  /* ---------- ABOUT / À PROPOS ---------- */
  about: {
    paragraphs: [
      {
        fr: "Élève-ingénieur en première année à l’ENSEEIHT (Toulouse INP), dans la filière 3EA – Électronique, Énergie Électrique et Automatique, après deux années de classes préparatoires MP au Maroc.",
        en: "First-year engineering student at ENSEEIHT (Toulouse INP) in the 3EA track – Electronics, Electrical Energy and Control – after a two-year MP preparatory programme for the French Grandes Écoles in Morocco."
      },
      {
        fr: "Je m’intéresse particulièrement aux systèmes embarqués, à la conception électronique, au prototypage, aux systèmes numériques ainsi qu’au test et à la validation de produits électroniques. Je suis aussi attiré par l’automatique, les capteurs et les systèmes électroniques à faible consommation, avec l’envie d’appliquer la programmation et la modélisation mathématique à de vrais problèmes d’ingénierie.",
        en: "I am particularly interested in embedded systems, electronics design, hands-on prototyping, digital systems, and electronic product testing and validation. I am also keen on control systems, sensor technologies and energy-efficient electronic systems, with a strong interest in applying programming and mathematical modelling to real-world engineering challenges."
      }
    ],
    // Vidéo pitch (YouTube "embed" link or ./assets/video.mp4). Leave "" to hide.
    pitchVideo: "",
    interests: [
      { icon: "hardware-chip-outline", title: { fr: "Systèmes embarqués", en: "Embedded systems" }, text: { fr: "Conception électronique, prototypage et systèmes numériques.", en: "Electronics design, prototyping and digital systems." } },
      { icon: "pulse-outline", title: { fr: "Automatique & capteurs", en: "Control & sensors" }, text: { fr: "Asservissement, mesure et traitement des signaux de capteurs.", en: "Feedback control, measurement and sensor signal processing." } },
      { icon: "flash-outline", title: { fr: "Énergie", en: "Energy" }, text: { fr: "Systèmes électroniques sobres et efficaces en énergie.", en: "Energy-efficient electronic systems." } },
      { icon: "code-slash-outline", title: { fr: "Programmation & modélisation", en: "Programming & modelling" }, text: { fr: "Python, C et outils mathématiques au service de l’ingénierie.", en: "Python, C and mathematical tools applied to engineering." } }
    ]
  },

  /* ---------- RESUME / PARCOURS ---------- */
  resume: {
    education: [
      {
        title: { fr: "ENSEEIHT – Toulouse INP", en: "ENSEEIHT – Toulouse INP (Engineering School)" },
        dates: { fr: "2026 — aujourd’hui", en: "2026 — Present" },
        text: { fr: "Cycle ingénieur, 1re année · Filière 3EA (Électronique, Énergie Électrique et Automatique) · Toulouse, France.", en: "Master’s-level engineering programme, 1st year · 3EA track (Electronics, Electrical Energy and Control) · Toulouse, France." }
      },
      {
        title: { fr: "CPGE Al Zahrawi – Classes préparatoires MP", en: "CPGE Al Zahrawi – Preparatory classes (MP)" },
        dates: { fr: "2024 — 2026", en: "2024 — 2026" },
        text: { fr: "Mathématiques et physique intensives, préparation aux concours d’entrée des grandes écoles d’ingénieurs.", en: "Intensive two-year undergraduate programme in mathematics and physics, preparing for the nationwide competitive entrance exams to French engineering schools." }
      },
      {
        title: { fr: "Lycée Ihsane – El Jadida", en: "Lycée Ihsane – El Jadida (Senior High School)" },
        dates: { fr: "— 2024", en: "— 2024" },
        text: { fr: "Baccalauréat.", en: "Baccalauréat (High School Diploma)." }
      }
    ],
    activities: [
      {
        title: { fr: "Hackathon AI for Impact", en: "AI for Impact Hackathon" },
        dates: { fr: "2026", en: "2026" },
        text: { fr: "Travail en équipe et en temps limité sur une solution basée sur l’IA répondant à un défi concret.", en: "Team work under time pressure on an AI-based solution to a real-world challenge." }
      },
      {
        title: { fr: "MTYM – Moroccan Tournament of Young Mathematicians", en: "MTYM – Moroccan Tournament of Young Mathematicians" },
        dates: { fr: "2024", en: "2024" },
        text: { fr: "Compétition mathématique par équipes autour de problèmes ouverts, avec présentation et défense des solutions.", en: "Team mathematics competition built around open problems, with presentation and defence of solutions." }
      },
      {
        title: { fr: "Journée MATHS OSUI", en: "MATHS OSUI Day" },
        dates: { fr: "27 mai 2022", en: "27 May 2022" },
        text: { fr: "Participation à une journée consacrée aux mathématiques pendant mes années de lycée.", en: "Took part in a day dedicated to mathematics during high school." }
      }
    ],
    // level: "beginner" | "intermediate" | "advanced"
    skills: [
      { name: "Python", level: "intermediate" },
      { name: { fr: "Vibe coding (développement assisté par IA)", en: "Vibe coding (AI-assisted development)" }, level: "beginner" },
      { name: "C", level: "beginner" }
    ]
  },

  /* ---------- MOBILITY / MOBILITÉ ---------- */
  mobility: {
    intro: [
      {
        fr: "Mon objectif : étudier aux États-Unis. Le diplôme d’ingénieur de l’ENSEEIHT exige une mobilité internationale d’au moins 17 semaines et un niveau d’anglais B2+ ; je veux faire de cette obligation un tremplin vers une expérience américaine en génie électrique et informatique.",
        en: "My goal: to study in the United States. The ENSEEIHT engineering diploma requires at least 17 weeks of international mobility and a B2+ level in English; I want to turn this requirement into a stepping stone towards an American experience in electrical and computer engineering."
      }
    ],
    projects: [
      {
        icon: "school-outline",
        title: { fr: "Semestre d’échange / double diplôme", en: "Exchange semester / double degree" },
        where: { fr: "Georgia Institute of Technology (Atlanta, Géorgie)", en: "Georgia Institute of Technology (Atlanta, Georgia)" },
        when: { fr: "3e année (S9) · 2028 – 2029", en: "3rd year (S9) · 2028 – 2029" },
        text: { fr: "Georgia Tech figure parmi les partenaires de double diplôme de l’ENSEEIHT. Son école d’Electrical & Computer Engineering couvre les réseaux électriques, l’automatique et les systèmes embarqués, exactement les domaines que je veux approfondir. Candidature via le service des relations internationales de l’N7, sur dossier académique et test d’anglais.", en: "Georgia Tech is listed among ENSEEIHT’s double-degree partners. Its School of Electrical & Computer Engineering covers power systems, control and embedded systems, exactly the fields I want to deepen. Application through N7’s international relations office, based on academic record and an English test." }
      },
      {
        icon: "briefcase-outline",
        title: { fr: "Stage d’été aux États-Unis", en: "Summer internship in the USA" },
        where: { fr: "Entreprise ou laboratoire universitaire (systèmes embarqués / énergie)", en: "Company or university lab (embedded systems / energy)" },
        when: { fr: "Stage de 2e année (S8) · été 2028", en: "2nd-year internship (S8) · summer 2028" },
        text: { fr: "Un stage technique de 2 à 3 mois, sous visa J-1 (stagiaire) obtenu via un organisme sponsor. Objectif : découvrir le monde professionnel américain et appliquer Python/C à un projet concret de prototypage ou de test.", en: "A 2–3 month technical internship on a J-1 (intern) visa obtained through a sponsoring organisation. Aim: discover the American workplace and apply Python/C to a concrete prototyping or testing project." }
      },
      {
        icon: "ribbon-outline",
        title: { fr: "Master of Science (M.S.) en ECE", en: "Master of Science (M.S.) in ECE" },
        where: { fr: "Université américaine en Electrical & Computer Engineering", en: "US university, Electrical & Computer Engineering" },
        when: { fr: "Après le diplôme d’ingénieur · 2029+", en: "After the engineering diploma · 2029+" },
        text: { fr: "Poursuivre par un M.S. orienté recherche, financé par une bourse (ex. Fulbright France) ou un poste d’assistant de recherche / d’enseignement (RA/TA).", en: "Continue with a research-oriented M.S., funded by a grant (e.g. Fulbright France) or a research/teaching assistantship (RA/TA)." }
      }
    ],
    roadmap: [
      { date: "2026 – 2027", text: { fr: "Viser le niveau B2+ en anglais, préparer le TOEFL iBT et réaliser mes premiers projets en Python/C.", en: "Reach B2+ in English, start TOEFL iBT preparation and build my first Python/C projects." } },
      { date: "2027 – 2028", text: { fr: "Passer le TOEFL (objectif ≥ 100), candidater à l’échange et chercher un stage d’été aux États-Unis.", en: "Take the TOEFL (target ≥ 100), apply for the exchange and look for a summer internship in the USA." } },
      { date: "2028 – 2029", text: { fr: "Semestre (ou double diplôme) aux États-Unis.", en: "Semester (or double degree) in the USA." } },
      { date: "2029 +", text: { fr: "M.S. ou premier poste d’ingénieur, en France ou aux États-Unis.", en: "M.S. or first engineering job, in France or in the USA." } }
    ],
    checklist: [
      { fr: "Anglais : B2+ exigé par l’N7 ; TOEFL iBT ou IELTS demandé par les universités américaines.", en: "English: B2+ required by N7; TOEFL iBT or IELTS required by US universities." },
      { fr: "Dossier : bons résultats en 1re et 2e année, lettres de recommandation, lettre de motivation.", en: "Application: strong 1st- and 2nd-year grades, recommendation letters, statement of purpose." },
      { fr: "Visa : F-1 (études) ou J-1 (échange / stage).", en: "Visa: F-1 (studies) or J-1 (exchange / internship)." },
      { fr: "Budget : bourses de mobilité (à vérifier auprès des relations internationales), Fulbright France.", en: "Budget: mobility grants (to check with the international office), Fulbright France." }
    ]
  },

  /* ---------- SPORTS & ACTIVITIES / SPORTS & ACTIVITÉS ---------- */
  sports: {
    intro: { fr: "En dehors des cours, ces activités m’apprennent la régularité, la persévérance et l’esprit d’équipe.", en: "Outside class, these activities teach me consistency, perseverance and team spirit." },
    items: [
      { icon: "barbell-outline", title: { fr: "Calisthenics", en: "Calisthenics" }, text: { fr: "Entraînement au poids du corps : progression par objectifs, discipline et constance.", en: "Bodyweight training: goal-based progression, discipline and consistency." } },
      { icon: "bicycle-outline", title: { fr: "Vélo", en: "Biking" }, text: { fr: "Pour me déplacer comme pour explorer, une façon de rester actif au quotidien.", en: "Both to get around and to explore, a way to stay active every day." } },
      { icon: "game-controller-outline", title: { fr: "Jeux vidéo", en: "Gaming" }, text: { fr: "Stratégie, réflexes et jeu en équipe, et une curiosité pour la technologie derrière les jeux.", en: "Strategy, reflexes and teamwork, plus curiosity for the technology behind games." } }
    ]
  }
};
