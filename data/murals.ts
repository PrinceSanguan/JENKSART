/**
 * The eight murals Jenks supplied.
 *
 * IMPORTANT — titles and locations below are read from the photographs, not
 * supplied by Jenks. Anything we could not read off the wall itself is marked
 * `unconfirmed: true` so it can be checked with him before this goes public.
 * Where the mural carries its own text (Andi Pandi's, Leigh Halfpenny, Mortal
 * Bunny) the detail is certain, because it is painted on.
 */

export type Category = 'business' | 'schools' | 'community' | 'street';

export const categories: { key: Category | 'all'; label: string }[] = [
  { key: 'all', label: 'All work' },
  { key: 'business', label: 'Businesses' },
  { key: 'schools', label: 'Schools & nurseries' },
  { key: 'community', label: 'Community' },
  { key: 'street', label: 'Street & studio' },
];

export type Mural = {
  slug: string;
  title: string;
  location?: string;
  category: Category;
  src: string;
  width: number;
  height: number;
  orientation: 'portrait' | 'landscape';
  blurb: string;
  alt: string;
  unconfirmed?: boolean;
};

export const murals: Mural[] = [
  {
    slug: 'cyberpunk-twins-hoarding',
    title: 'Two Faces, One City',
    location: 'City-centre hoarding',
    category: 'street',
    src: '/murals/cyberpunk-twins-hoarding.jpg',
    width: 2048,
    height: 1536,
    orientation: 'landscape',
    blurb:
      'A three-panel piece: two figures in headsets facing each other across a burning skyline, painted the full width of a city-centre hoarding.',
    alt: 'Large street art mural of two red-haired figures wearing headsets facing each other across a painted dystopian city skyline, on hoarding boards in a city centre',
    unconfirmed: true,
  },
  {
    slug: 'leigh-halfpenny-gorseinon',
    title: 'Gorseinon, Home to Leigh Halfpenny',
    location: 'Gorseinon, Swansea',
    category: 'community',
    src: '/murals/leigh-halfpenny-gorseinon.jpg',
    width: 2048,
    height: 1536,
    orientation: 'landscape',
    blurb:
      'A full gable end for the village that raised him — the Wales full-back mid-kick, signed by the man himself.',
    alt: 'Gable-end mural of Welsh rugby player Leigh Halfpenny kicking a ball, lettered "Gorseinon home to Leigh Halfpenny" with his signature, Gorseinon, Swansea',
  },
  {
    slug: 'mortal-bunny-rum-shutter',
    title: 'Mortal Bunny Spiced Rum',
    location: 'Shutter commission',
    category: 'business',
    src: '/murals/mortal-bunny-rum-shutter.jpg',
    width: 1536,
    height: 2048,
    orientation: 'portrait',
    blurb:
      'Brand work on a roller shutter — a sugar-skull rabbit in a cowboy hat, hauling a barrel. Closed for the night and still selling.',
    alt: 'Mural on a black roller shutter of a sugar-skull rabbit in a cowboy hat holding a rum barrel beside a giant Mortal Bunny Spiced Rum bottle',
  },
  {
    slug: 'child-ladybird-portrait',
    title: 'Ladybird',
    location: 'Street corner',
    category: 'street',
    src: '/murals/child-ladybird-portrait.jpg',
    width: 1536,
    height: 2048,
    orientation: 'portrait',
    blurb:
      'Photorealistic greyscale, two storeys of it, with one spot of red doing all the work.',
    alt: 'Photorealistic greyscale street mural of a wide-eyed child’s face with a bright red ladybird on the nose, wrapping a street corner',
    unconfirmed: true,
  },
  {
    slug: 'andi-pandis-nursery',
    title: "Croeso i Andi Pandi's",
    location: "Andi Pandi's Children's Day Nursery",
    category: 'schools',
    src: '/murals/andi-pandis-nursery.jpg',
    width: 2048,
    height: 1536,
    orientation: 'landscape',
    blurb:
      'A welcome wall in Welsh and English — traditional costume, a colliery headframe on the hill, and "Ein Cymuned / Our Community" on the sign.',
    alt: 'Nursery mural reading "Croeso i Andi Pandi’s Children’s Day Nursery est 2003" with children in traditional Welsh costume, a colliery headframe and a green valley',
  },
  {
    slug: 'nursery-welsh-landscape',
    title: 'Somewhere to Look At All Day',
    location: 'Nursery playroom',
    category: 'schools',
    src: '/murals/nursery-welsh-landscape.jpg',
    width: 2048,
    height: 1536,
    orientation: 'landscape',
    blurb:
      'An indoor playroom turned into a Welsh valley — a steam train, wind turbines, a boar, and every child in the room painted into it.',
    alt: 'Indoor nursery playroom mural of children playing in a Welsh valley, one child in a wheelchair, with a steam train, wind turbines, a wild boar and the Welsh flag',
    unconfirmed: true,
  },
  {
    slug: 'welsh-miner-heritage',
    title: 'Lamp and Daffodil',
    location: 'Carmarthenshire',
    category: 'community',
    src: '/murals/welsh-miner-heritage.jpg',
    width: 2048,
    height: 1536,
    orientation: 'landscape',
    blurb:
      'A collier at rest with his lamp, set between a daffodil, the flag and a Celtic love spoon. Painted straight onto pebbledash.',
    alt: 'Exterior wall mural of a Welsh coal miner crouching with a lit Davy lamp, beside a daffodil, the Welsh flag, a colliery headframe and a Celtic love-spoon design',
    unconfirmed: true,
  },
  {
    slug: 'cracked-stone-eclipse',
    title: 'Eclipse',
    location: 'Studio board',
    category: 'street',
    src: '/murals/cracked-stone-eclipse.jpg',
    width: 1536,
    height: 2048,
    orientation: 'portrait',
    blurb:
      'Painted on board rather than brick — a figure of cracking stone coming apart towards an eclipse.',
    alt: 'Spray-painted board showing a monochrome figure made of cracking stone breaking apart, facing a red solar eclipse',
    unconfirmed: true,
  },
];

/** The four strongest images, used for the homepage hero crossfade. */
export const heroMurals = [
  murals.find((m) => m.slug === 'cyberpunk-twins-hoarding')!,
  murals.find((m) => m.slug === 'leigh-halfpenny-gorseinon')!,
  murals.find((m) => m.slug === 'child-ladybird-portrait')!,
  murals.find((m) => m.slug === 'mortal-bunny-rum-shutter')!,
];
