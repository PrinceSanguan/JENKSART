import type { Metadata } from 'next';
import Link from 'next/link';
import MuralGrid from '@/components/MuralGrid';
import Reveal from '@/components/Reveal';
import { murals } from '@/data/murals';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Murals',
  description:
    'Mural and street art work by JenksArt — shopfronts, gable ends, nurseries, community walls and street portraits across Swansea, Llanelli and South Wales.',
  alternates: { canonical: '/murals' },
};

export default function MuralsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 lg:pb-32 lg:pt-44">
      <Reveal variant="heading" as="h1" className="display text-6xl md:text-8xl">
        <span className="block">The</span>
        <span className="outline-word block">murals</span>
      </Reveal>

      <Reveal>
        <p className="mt-8 max-w-2xl text-lg text-cream/70">
          A selection of recent work. Painted across{' '}
          {site.serviceAreas.slice(0, 4).join(', ')} — and lately in Bristol.
        </p>
      </Reveal>

      <div className="mt-16">
        <MuralGrid murals={murals} filterable />
      </div>

      <div className="mt-24 border-t border-cream/10 pt-14">
        <p className="max-w-2xl text-cream/65">
          There is a great deal more than this — community murals across Carmarthenshire, the
          Star Wars subway in Dafen, the five panels at Llanelli Seaside. Those stories are on{' '}
          <Link href="/about" className="text-flame underline underline-offset-4 hover:text-cream">
            the about page
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
