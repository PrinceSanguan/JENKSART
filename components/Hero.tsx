'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { heroMurals } from '@/data/murals';
import { site } from '@/data/site';

const HOLD_MS = 7000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroMurals.length);
      // Re-keys the zooming layer so the Ken Burns animation restarts cleanly.
      setCycle((c) => c + 1);
    }, HOLD_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col justify-end overflow-hidden">
      {heroMurals.map((m, i) => (
        <div
          key={m.slug}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: i === index ? 1 : 0, zIndex: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <div
            key={`${m.slug}-${cycle}`}
            className="h-full w-full"
            style={{
              animation:
                i === index
                  ? 'kenBurnsZoomOut 7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards'
                  : 'none',
            }}
          >
            <Image
              src={m.src}
              alt={i === 0 ? m.alt : ''}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      ))}

      {/* Scrims — the type has to stay readable over all four images, and two
          of them are bright at the top where the nav sits. */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
      <div className="absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-ink/85 to-transparent" />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pb-20 pt-32">
        <p className="micro text-flame">{site.role}</p>

        <h1 className="display mt-6 text-[clamp(3.5rem,15vw,11rem)]">
          <span className="block">Jenks</span>
          <span className="outline-word block">Art</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg text-cream/85 md:text-xl">
          Murals for homes, shopfronts and whole communities across{' '}
          {site.serviceAreas.slice(0, 3).join(', ')} — and wherever else the wall is.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/murals"
            className="micro border border-flame bg-flame px-8 py-4 text-white transition-colors hover:bg-flame-dim"
          >
            See the murals
          </Link>
          <a
            href={site.phoneHref}
            className="micro border border-cream/30 px-8 py-4 text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink"
          >
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
