export const socials = {
  instagram: 'https://www.instagram.com/rozi.dance/',
  youtube: 'https://www.youtube.com/@luarozihayband',
  facebook: 'https://www.facebook.com/RoziDanseenBelgique/',
  phone: 'tel:+32486219896',
  email: 'mailto:abrahamyan.rose@mail.ru',
};

export type RefonteVideo = {
  title: string;
  label: string;
  src: string;
  poster: string;
  href: string;
  start?: number;
};

export const heroVideos: RefonteVideo[] = [
  {
    title: 'Danse de mariage',
    label: 'Banquet',
    src: '/videos/mariages/danse-3.mp4',
    poster: '/images/video-posters/mariages-danse-3.png',
    href: 'https://www.instagram.com/reel/DY6ymdMsrb6/',
    start: 8,
  },
  {
    title: 'Chant live',
    label: 'Voix',
    src: '/videos/chant/chant-1.mp4',
    poster: '/images/video-posters/chant-chant-1.png',
    href: 'https://www.instagram.com/reel/DDXmkVPoV5g/',
    start: 20,
  },
  {
    title: 'Musiciens',
    label: 'Live band',
    src: '/videos/musiciens/musiciens-2.mp4',
    poster: '/images/video-posters/musiciens-musiciens-2.png',
    href: 'https://www.instagram.com/reel/DAtffBloITF/',
    start: 2,
  },
];

export const prestations = [
  {
    title: 'Mariages & evenements',
    kicker: 'Rituel, scene, banquet',
    href: '/mariages',
    text: "De l'habillage de la mariee au banquet, une presence artistique complete.",
    video: heroVideos[0],
  },
  {
    title: "L'art du chant",
    kicker: 'Soul, Pop, Jazz',
    href: '/chant',
    text: 'Des voix chaudes et precises pour ouvrir un moment, tenir une salle, marquer une emotion.',
    video: heroVideos[1],
  },
  {
    title: 'Cours chant & danse',
    kicker: 'Studio vivant',
    href: '/cours',
    text: "Une transmission accessible, physique, joyeuse, pour debutants comme profils avances.",
    video: {
      title: 'Cours Rozi Dance',
      label: 'Transmission',
      src: '/videos/cours/cours-1.mp4',
      poster: '/images/video-posters/cours-cours-1.png',
      href: 'https://www.instagram.com/reel/DPgmkq3iug0/',
      start: 5,
    },
  },
];

export const mariagePages = [
  {
    slug: 'danse-de-la-mariee',
    title: 'Danse de la mariee',
    text: 'Grace, tradition et tension douce autour de la mariee.',
    videos: [
      {
        title: 'Danse de la mariee',
        label: 'Signature',
        src: '/videos/danse-mariee/danse-mariee-3.mp4',
        poster: '/images/video-posters/danse-mariee-danse-mariee-3.png',
        href: 'https://www.instagram.com/reel/DR1unSWDMTp/',
        start: 12,
      },
    ],
  },
  {
    slug: 'chant-de-la-mariee',
    title: 'Chant de la mariee',
    text: 'Une voix pour installer le silence, puis faire monter l emotion.',
    videos: [
      {
        title: 'Chant de la mariee I',
        label: 'Ceremonie',
        src: '/videos/mariee/mariee-1.mp4',
        poster: '/images/video-posters/mariee-mariee-1.png',
        href: 'https://www.instagram.com/reel/DYSGbsVtK7S/',
        start: 4,
      },
      {
        title: 'Chant de la mariee II',
        label: 'Emotion',
        src: '/videos/mariee/mariee-2.mp4',
        poster: '/images/video-posters/mariee-mariee-2.png',
        href: 'https://www.instagram.com/reel/DYCpnNTiIAA/',
        start: 8,
      },
      {
        title: 'Chant de la mariee III',
        label: 'Intime',
        src: '/videos/mariee/mariee-3.mp4',
        poster: '/images/video-posters/mariee-mariee-3.png',
        href: 'https://www.instagram.com/reel/DCzj6L4IQAA/',
        start: 5,
      },
    ],
  },
  {
    slug: 'danse-de-mariage',
    title: 'Danse de mariage',
    text: 'Des performances de groupe pour donner du volume au banquet.',
    videos: [
      {
        title: 'Danse banquet I',
        label: 'Energie',
        src: '/videos/mariages/danse-1.mp4',
        poster: '/images/video-posters/mariages-danse-1.png',
        href: 'https://www.instagram.com/reel/DO8kuahirNR/',
        start: 4,
      },
      {
        title: 'Danse banquet II',
        label: 'Scene',
        src: '/videos/mariages/danse-2.mp4',
        poster: '/images/video-posters/mariages-danse-2.png',
        href: 'https://www.instagram.com/reel/DXPkBfZjDfG/',
        start: 13,
      },
      {
        title: 'Danse banquet III',
        label: 'Pulse',
        src: '/videos/mariages/danse-3.mp4',
        poster: '/images/video-posters/mariages-danse-3.png',
        href: 'https://www.instagram.com/reel/DY6ymdMsrb6/',
        start: 8,
      },
      {
        title: 'Danse banquet IV',
        label: 'Final',
        src: '/videos/mariages/danse-4.mp4',
        poster: '/images/video-posters/mariages-danse-4.png',
        href: 'https://www.instagram.com/reel/DKxHqISI1Wp/',
        start: 9,
      },
    ],
  },
  {
    slug: 'musiciens',
    title: 'Nos musiciens',
    text: 'Une presence live qui soutient le chant, la danse et la salle.',
    videos: [
      {
        title: 'Musiciens I',
        label: 'Live',
        src: '/videos/musiciens/musiciens-1.mp4',
        poster: '/images/video-posters/musiciens-musiciens-1.png',
        href: 'https://www.instagram.com/reel/DO8wo3NjEY0/',
        start: 22,
      },
      {
        title: 'Musiciens II',
        label: 'Ensemble',
        src: '/videos/musiciens/musiciens-2.mp4',
        poster: '/images/video-posters/musiciens-musiciens-2.png',
        href: 'https://www.instagram.com/reel/DAtffBloITF/',
        start: 2,
      },
      {
        title: 'Musiciens III',
        label: 'Vibration',
        src: '/videos/musiciens/musiciens-3.mp4',
        poster: '/images/video-posters/musiciens-musiciens-3.png',
        href: 'https://www.instagram.com/reel/DPl-zEijMzZ/',
        start: 15,
      },
    ],
  },
];

export const chantVideos: RefonteVideo[] = [
  {
    title: 'Chant Soul',
    label: 'Soul',
    src: '/videos/chant/chant-1.mp4',
    poster: '/images/video-posters/chant-chant-1.png',
    href: 'https://www.instagram.com/reel/DDXmkVPoV5g/',
    start: 20,
  },
  {
    title: 'Chant Pop',
    label: 'Pop',
    src: '/videos/chant/chant-2.mp4',
    poster: '/images/video-posters/chant-chant-2.png',
    href: 'https://www.instagram.com/reel/DDch0BjoQfT/',
    start: 18,
  },
  {
    title: 'Chant Jazz',
    label: 'Jazz',
    src: '/videos/chant/chant-3.mp4',
    poster: '/images/video-posters/chant-chant-3.png',
    href: 'https://www.instagram.com/reel/DDVA4oQI4c1/',
    start: 15,
  },
];

export const coursPages = [
  {
    slug: 'chant-armenien',
    title: 'Chant armenien',
    text: 'Repertoire, respiration et presence vocale.',
  },
  {
    slug: 'chant-jazz-soul-pop',
    title: 'Chant Jazz Soul Pop',
    text: 'Technique vocale et interpretation pour scenes modernes.',
  },
  {
    slug: 'chant-de-mariage',
    title: 'Chant de mariage',
    text: 'Preparer une chanson intime pour une ceremonie ou une entree.',
  },
  {
    slug: 'danse-armenienne',
    title: 'Danse armenienne',
    text: 'Bases, posture, rythme, ancrage et style.',
  },
  {
    slug: 'danse-en-groupe',
    title: 'Danse en groupe',
    text: 'Coordination, ecoute collective et choregraphies.',
  },
  {
    slug: 'cours-en-ligne',
    title: 'Cours en ligne',
    text: 'Transmission a distance avec structure et suivi.',
  },
];

export const coursVideos: RefonteVideo[] = [
  {
    title: 'Cours I',
    label: 'Studio',
    src: '/videos/cours/cours-1.mp4',
    poster: '/images/video-posters/cours-cours-1.png',
    href: 'https://www.instagram.com/reel/DPgmkq3iug0/',
    start: 5,
  },
  {
    title: 'Cours II',
    label: 'Technique',
    src: '/videos/cours/cours-2.mp4',
    poster: '/images/video-posters/cours-cours-2.png',
    href: 'https://www.instagram.com/reel/C1M02FgIz6j/',
    start: 25,
  },
  {
    title: 'Cours III',
    label: 'Rythme',
    src: '/videos/cours/cours-3.mp4',
    poster: '/images/video-posters/cours-cours-3.png',
    href: 'https://www.instagram.com/reel/DLrwoH9ojVe/',
    start: 10,
  },
  {
    title: 'Cours IV',
    label: 'Groupe',
    src: '/videos/cours/cours-4.mp4',
    poster: '/images/video-posters/cours-cours-4.png',
    href: 'https://www.instagram.com/reel/C_6LDgrIsAA/',
    start: 8,
  },
  {
    title: 'Cours V',
    label: 'Scene',
    src: '/videos/cours/cours-5.mp4',
    poster: '/images/video-posters/cours-cours-5.png',
    href: 'https://www.instagram.com/reel/DH1h3BnI9XE/',
    start: 8,
  },
];

export const galleryPhotos = Array.from({ length: 15 }, (_, index) => {
  const n = String(index + 1).padStart(2, '0');
  return {
    src: `/images/galerie/photo-${n}.webp`,
    thumb: `/images/galerie/photo-${n}-thumb.webp`,
    alt: `Rozi Dance galerie ${index + 1}`,
  };
});
