export type Lang = "en" | "fr";

type TranslationDict = {
  nav: {
    home: string;
    services: string;
    team: string;
    bookNow: string;
  };
  home: {
    headline1: string;
    headline2: string;
    sub1: string;
    sub2: string;
    introHeading1: string;
    introHeading2: string;
    introBody: string;
    ourStory: string;
    stats: { num: string; label: string }[];
    whatWeDo: string;
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle1: string;
    subtitle2: string;
  };
  about: {
    eyebrow: string;
    title: string;
    storyHeading1: string;
    storyHeading2: string;
    storyHeading3: string;
    storyP1: string;
    storyP2: string;
    storyP3: string;
    values: { title: string; body: string }[];
    teamEyebrow: string;
    barbers: { photo: string; name: string; bio: string }[];
    visitEyebrow: string;
    visitHeading: string;
    getDirections: string;
  };
  footer: {
    rights: string;
  };
  servicesList: { name: string; description: string }[];
};

export const translations: Record<Lang, TranslationDict> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      team: "Team",
      bookNow: "Book Now",
    },
    home: {
      headline1: "Where Precision",
      headline2: "Meets Privacy",
      sub1: "Every cut, a statement. Every visit, an experience.",
      sub2: "Where craft meets culture.",
      introHeading1: "The Art of",
      introHeading2: "the Cut",
      introBody:
        "Dimension is built on one principle — excellence without compromise. Every service is delivered with razor-sharp technique, genuine attention, and a standard that never settles.",
      ourStory: "Our Story",
      stats: [
        { num: "5+", label: "Years in business" },
        { num: "10K+", label: "Clients served" },
        { num: "3", label: "Master barbers" },
        { num: "100%", label: "Satisfaction" },
      ],
      whatWeDo: "What We Do",
    },
    services: {
      eyebrow: "What We Do",
      title: "Services",
      subtitle1: "Every service is deliberate.",
      subtitle2: "Every detail accounted for.",
    },
    about: {
      eyebrow: "Who We Are",
      title: "About",
      storyHeading1: "Built on",
      storyHeading2: "a single",
      storyHeading3: "belief.",
      storyP1:
        "Dimension was founded in 2020 with one conviction: that the barbershop could be something more. Not just a place to get a haircut — a place where attention to detail is non-negotiable, where every client leaves feeling like the best version of themselves.",
      storyP2:
        "We built this shop the hard way — refusing to rush, refusing to compromise, and refusing to treat any head of hair as ordinary. That standard has never changed.",
      storyP3:
        "Dimension is more than a name. It's a reminder that craft lives in the details — in the depth of a fade, the angle of a line, the confidence a clean cut gives a person walking out the door.",
      values: [
        {
          title: "Precision",
          body: "Every line is intentional. Every fade is seamless. We take the time to get it right — every single time.",
        },
        {
          title: "Respect",
          body: "Your time, your look, your culture. We honor all of it. The chair is yours.",
        },
        {
          title: "Craft",
          body: "Barbering is a discipline. We treat it as one — studying technique, investing in tools, and never stopping the pursuit.",
        },
      ],
      teamEyebrow: "The Team",
      barbers: [
        {
          photo: "/team/nader.jpg",
          name: "Nader",
          bio: "Nader loves a good conversation just as much as a clean line. He pays close attention to every detail, from the first consultation to the final trim, so you leave looking exactly how you pictured it.",
        },
        {
          photo: "/team/tony.jpg",
          name: "Tony",
          bio: "Tony keeps things light and easygoing while staying precise with every cut. He listens closely during consultations and always delivers exactly what you asked for.",
        },
        {
          photo: "/team/ralph.jpg",
          name: "Ralph",
          bio: "Ralph has a sharp eye for detail and an easy way with conversation. He takes his time with every cut and makes sure nothing gets overlooked.",
        },
      ],
      visitEyebrow: "Visit Us",
      visitHeading: "Come See Us.",
      getDirections: "Get Directions",
    },
    footer: {
      rights: "All rights reserved.",
    },
    servicesList: [
      {
        name: "Beard Shave/Trim",
        description: "Includes a beard fade, precise line up and trim, finished off with a hot towel.",
      },
      {
        name: "Haircut",
        description: "Clipper cut, fade, and use of scissors. Styled to finish.",
      },
      {
        name: "Haircut + Beard",
        description: "Clipper cut, fade, and use of scissors, plus a beard fade, line up and trim.",
      },
      {
        name: "Full Scissor Haircut",
        description: "Haircut done fully with scissors. Includes a hair wash and styling.",
      },
      {
        name: "Full Scissor Haircut and Beard",
        description:
          "Haircut done fully with scissors, plus a beard trim and line up. Includes a hair wash and styling.",
      },
      {
        name: "Full Set",
        description: "Haircut and beard trim/line up, hot towel shave, and hair wash.",
      },
    ],
  },
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      team: "Équipe",
      bookNow: "Réserver",
    },
    home: {
      headline1: "Où précision",
      headline2: "rime avec discrétion",
      sub1: "Chaque coupe, une signature. Chaque visite, une expérience.",
      sub2: "Là où le métier rencontre la culture.",
      introHeading1: "L'art de",
      introHeading2: "la coupe",
      introBody:
        "Dimension repose sur un seul principe — l'excellence sans compromis. Chaque service est livré avec une technique irréprochable, une attention sincère et une exigence qui ne fléchit jamais.",
      ourStory: "Notre histoire",
      stats: [
        { num: "5+", label: "Années d'existence" },
        { num: "10K+", label: "Clients servis" },
        { num: "3", label: "Barbiers experts" },
        { num: "100%", label: "Satisfaction" },
      ],
      whatWeDo: "Ce que nous faisons",
    },
    services: {
      eyebrow: "Ce que nous faisons",
      title: "Services",
      subtitle1: "Chaque service est réfléchi.",
      subtitle2: "Chaque détail est pris en compte.",
    },
    about: {
      eyebrow: "Qui nous sommes",
      title: "À propos",
      storyHeading1: "Fondé sur",
      storyHeading2: "une seule",
      storyHeading3: "conviction.",
      storyP1:
        "Dimension a été fondé en 2020 avec une conviction : que le barbershop pouvait être bien plus. Pas seulement un endroit où se faire couper les cheveux — un lieu où l'attention aux détails est non négociable, où chaque client repart en se sentant être la meilleure version de lui-même.",
      storyP2:
        "Nous avons bâti ce salon à la dure — en refusant de nous précipiter, de faire des compromis, et de traiter une seule tête comme ordinaire. Cette exigence n'a jamais changé.",
      storyP3:
        "Dimension est plus qu'un nom. C'est un rappel que le métier se vit dans les détails — dans la profondeur d'un dégradé, l'angle d'une ligne, la confiance qu'une coupe impeccable donne en sortant par la porte.",
      values: [
        {
          title: "Précision",
          body: "Chaque ligne est intentionnelle. Chaque dégradé est impeccable. Nous prenons le temps de bien faire les choses — à chaque fois.",
        },
        {
          title: "Respect",
          body: "Votre temps, votre style, votre culture. Nous respectons tout cela. La chaise est à vous.",
        },
        {
          title: "Savoir-faire",
          body: "Le métier de barbier est une discipline. Nous le traitons comme telle — en étudiant la technique, en investissant dans nos outils, et sans jamais arrêter d'apprendre.",
        },
      ],
      teamEyebrow: "L'équipe",
      barbers: [
        {
          photo: "/team/nader.jpg",
          name: "Nader",
          bio: "Nader aime autant une bonne conversation qu'une ligne bien nette. Il porte une attention particulière à chaque détail, de la première consultation à la touche finale, pour que vous repartiez exactement comme vous l'aviez imaginé.",
        },
        {
          photo: "/team/tony.jpg",
          name: "Tony",
          bio: "Tony garde toujours une ambiance détendue tout en restant précis dans chaque coupe. Il écoute attentivement lors des consultations et livre toujours exactement ce que vous avez demandé.",
        },
        {
          photo: "/team/ralph.jpg",
          name: "Ralph",
          bio: "Ralph a l'œil pour le détail et une facilité à discuter avec ses clients. Il prend son temps avec chaque coupe et s'assure que rien n'est laissé au hasard.",
        },
      ],
      visitEyebrow: "Venez nous voir",
      visitHeading: "Venez nous rencontrer.",
      getDirections: "Obtenir l'itinéraire",
    },
    footer: {
      rights: "Tous droits réservés.",
    },
    servicesList: [
      {
        name: "Rasage/Taille de barbe",
        description: "Comprend un dégradé de barbe, une ligne et une taille précises, complétés par une serviette chaude.",
      },
      {
        name: "Coupe de cheveux",
        description: "Coupe à la tondeuse, dégradé et utilisation des ciseaux. Coiffage final inclus.",
      },
      {
        name: "Coupe + Barbe",
        description: "Coupe à la tondeuse, dégradé et ciseaux, plus un dégradé de barbe, une ligne et une taille.",
      },
      {
        name: "Coupe entièrement aux ciseaux",
        description: "Coupe réalisée entièrement aux ciseaux. Comprend un lavage de cheveux et un coiffage.",
      },
      {
        name: "Coupe aux ciseaux et barbe",
        description:
          "Coupe réalisée entièrement aux ciseaux, plus une taille et une ligne de barbe. Comprend un lavage de cheveux et un coiffage.",
      },
      {
        name: "Ensemble complet",
        description: "Coupe de cheveux et taille/ligne de barbe, rasage à la serviette chaude et lavage de cheveux.",
      },
    ],
  },
};
