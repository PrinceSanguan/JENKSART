import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CallBar from '@/components/CallBar';
import SmoothScroll from '@/components/SmoothScroll';
import { site } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'JenksArt — Welsh Street Artist & Muralist',
    template: '%s — JenksArt',
  },
  description:
    'Murals and custom artwork across Swansea, Llanelli and South Wales. Prices to match budgets.',
  keywords: [
    'mural artist Llanelli',
    'mural artist Swansea',
    'street artist South Wales',
    'graffiti artist Carmarthenshire',
    'shopfront mural Wales',
    'commercial mural painter',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: site.url,
    siteName: site.name,
    title: 'JenksArt — Welsh Street Artist & Muralist',
    description:
      'Murals and custom artwork across Swansea, Llanelli and South Wales. Prices to match budgets.',
    // og:image comes from app/opengraph-image.jpg via the file convention —
    // listing it here as well would override the hashed, cache-busting URL.
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JenksArt — Welsh Street Artist & Muralist',
    description: 'Murals and custom artwork across Swansea, Llanelli and South Wales.',
  },
  alternates: { canonical: '/' },
};

/**
 * LocalBusiness markup, so search engines can connect the name, phone and
 * service area. His current site carries none, which is part of why he is
 * invisible for "mural artist Llanelli".
 */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${site.url}/#business`,
  name: site.name,
  alternateName: site.artist,
  description:
    'Welsh street artist and muralist painting homes, shopfronts, schools and community walls across South Wales.',
  url: site.url,
  telephone: '+447817428594',
  email: site.email,
  image: `${site.url}/murals/cyberpunk-twins-hoarding.jpg`,
  priceRange: '££',
  address: { '@type': 'PostalAddress', addressRegion: 'Carmarthenshire', addressCountry: 'GB' },
  areaServed: site.serviceAreas.map((a) => ({ '@type': 'Place', name: a })),
  sameAs: [site.social.facebook, site.social.instagram],
  founder: { '@type': 'Person', name: site.artist },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en-GB">
      <body className="pb-14 md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        <Nav />
        <main>{children}</main>
        <Footer />
        <CallBar />
      </body>
    </html>
  );
}
