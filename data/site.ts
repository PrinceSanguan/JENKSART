/**
 * Single source of truth for everything about the business.
 *
 * Every detail here is taken verbatim from jenksart.com or his verified
 * Facebook Page — nothing is invented. If Jenks corrects something, this is
 * the only file that needs changing.
 */

export const site = {
  name: 'JenksArt',
  artist: 'Steve "Jenks" Jenkins',
  role: 'Welsh street artist & muralist',

  // Contact — identical on jenksart.com and the Facebook Page, so the NAP is consistent.
  phone: '07817 428594',
  phoneHref: 'tel:+447817428594',
  smsHref: 'sms:+447817428594',
  email: 'jenksart3@gmail.com',

  social: {
    facebook: 'https://www.facebook.com/jenksart1',
    instagram: 'https://www.instagram.com/jenksart1',
  },

  // His Facebook Page service area, in his own order.
  serviceAreas: ['Swansea', 'Llanelli', 'Carmarthenshire', 'Port Talbot', 'South Wales'],

  // His own words, from the Facebook Page intro. Used as-is — never paraphrased.
  tagline: 'Prices to match budgets.',
  intro:
    'Give me a shout if you need a mural or artwork on something. Prices to match budgets.',

  // Social proof as read from the verified Page on 8 October 2026.
  proof: {
    followers: '17K',
    recommendRate: '96%',
    reviewCount: 18,
  },

  url: 'https://jenksart.vercel.app',

  // Kept as a constant rather than `new Date()` so prerendering stays
  // deterministic. Bump it each January.
  year: 2026,
} as const;

/**
 * What he actually paints, split the way a buyer thinks about it.
 * Wording follows his own list rather than agency-speak.
 */
export const services = [
  {
    key: 'homes',
    title: 'Homes',
    lead: 'A wall in the house that deserves more than paint.',
    items: [
      "Kids' bedrooms and playrooms",
      'Living rooms and feature walls',
      'Garden walls and garages',
      'Gates, sheds and fences',
    ],
  },
  {
    key: 'business',
    title: 'Businesses & Community',
    lead: 'Shopfronts people photograph, and walls a town remembers.',
    items: [
      'Shopfronts, shutters and gable ends',
      'Cafés, bars, gyms and barbers',
      'Nurseries, schools and youth clubs',
      'Community murals and council commissions',
    ],
  },
] as const;
