/**
 * Third-party credibility — all of it published, none of it self-claimed.
 *
 * Every item below has a named source. Nothing here is on his current site,
 * which is why it is the most valuable thing the new one adds. Deliberately
 * no awards and no "years of experience" claims: neither is evidenced.
 */

export type Quote = {
  text: string;
  attribution: string;
  source: string;
};

/** Pull quotes, strongest first. */
export const quotes: Quote[] = [
  {
    text: 'One of Wales’ leading street artists.',
    attribution: 'nation.cymru',
    source: 'https://nation.cymru/culture/watch-star-wars-themed-mural-transforms-subway-in-welsh-town/',
  },
  {
    text: 'I’d like to thank Jenks Art for bringing vibrancy to our market towns.',
    attribution: 'Carmarthenshire County Council',
    source: 'https://newsroom.carmarthenshire.gov.wales/2025/04/have-you-spotted-our-murals',
  },
  {
    text: 'A spectacular mural for every one to admire when they visit Whitland.',
    attribution: 'The Station House, Whitland',
    source: 'https://www.tenby-today.co.uk/news/entertainment/whitland-station-house-pub-praises-spectacular-railway-themed-mural-726545',
  },
  {
    text: 'We are excited that we may be able to work with JenksArt in the future.',
    attribution: 'South West Wales Connected Community Rail Partnership',
    source: 'https://www.tenby-today.co.uk/news/entertainment/whitland-station-house-pub-praises-spectacular-railway-themed-mural-726545',
  },
];

/** Short credentials for the strip under the hero. */
export const credentials = [
  'Commissioned by Carmarthenshire County Council',
  'Ten Towns Programme · UK Shared Prosperity Fund',
  '“One of Wales’ leading street artists” — nation.cymru',
  '96% recommend from 18 reviews',
];

export type Project = {
  title: string;
  where: string;
  detail: string;
};

/**
 * Commissions covered by the press. We have no photographs of these, so they
 * are listed as a written record rather than shown — which is also the honest
 * way round, since the imagery belongs to the publications.
 */
export const notableProjects: Project[] = [
  {
    title: 'The Ten Towns Programme',
    where: 'Carmarthenshire',
    detail:
      'Ten murals commissioned by Carmarthenshire County Council through the UK Government’s Shared Prosperity Fund, across Laugharne, Cross Hands, St Clears, Whitland, Llandeilo, Kidwelly and Newcastle Emlyn, with Llanybydder, Cwmaman and Llandovery to follow.',
  },
  {
    title: 'Seaside, Llanelli',
    where: 'North Dock, Llanelli',
    detail:
      'A five-panel community mural reading Joy, Struggle, Love, Pride and Hope — the tinplate works, the town hall clock, the 1972 win over the All Blacks, and a child in a Welsh shirt marked Dyfodol facing the sunrise. Funded entirely out of his own pocket, in a week.',
  },
  {
    title: 'The Star Wars subway',
    where: 'Dafen, Llanelli',
    detail:
      'Six months of work, self-funded, after the previous mural flaked away. “I felt really disappointed and upset for the people that use the subway,” he said, “so the decision was made to renew the mural and to foot the bill for it myself.”',
  },
  {
    title: 'The Station House',
    where: 'Whitland',
    detail:
      'A railway-themed mural on the pub beside Whitland station, and a remembrance mural for the Whitland and Narberth Royal British Legion.',
  },
  {
    title: 'Twin Town',
    where: 'Port Talbot',
    detail:
      'Subway murals at Dalton Road and the hospital roundabout, plus a tribute to Meyrick Sheen alongside the existing Michael Sheen portrait.',
  },
  {
    title: 'Painted with the people who use it',
    where: 'Pontyates & Gowerton',
    detail:
      'At Pontyates he went into two village schools and asked the pupils what they wanted to see rather than deciding himself. At Ty Trafle in Gowerton, the children painted it with him.',
  },
];

/** Publications that have covered his work. */
export const publications = [
  'nation.cymru',
  'Swansea Bay News',
  'Carmarthen Journal',
  'South Wales Evening Post',
  'Tenby Today',
  'Carmarthenshire County Council',
];
