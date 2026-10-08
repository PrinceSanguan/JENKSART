'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { categories, type Category, type Mural } from '@/data/murals';
import Lightbox from './Lightbox';
import Reveal from './Reveal';

export default function MuralGrid({
  murals,
  filterable = false,
}: {
  murals: Mural[];
  filterable?: boolean;
}) {
  const [active, setActive] = useState<Category | 'all'>('all');
  const [openAt, setOpenAt] = useState<number | null>(null);

  const shown = useMemo(
    () => (active === 'all' ? murals : murals.filter((m) => m.category === active)),
    [murals, active],
  );

  return (
    <>
      {filterable && (
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((c) => {
            const count =
              c.key === 'all' ? murals.length : murals.filter((m) => m.category === c.key).length;
            if (count === 0) return null;
            return (
              <button
                key={c.key}
                type="button"
                onClick={() => setActive(c.key)}
                aria-pressed={active === c.key}
                className={`micro border px-5 py-3 transition-colors ${
                  active === c.key
                    ? 'border-flame bg-flame text-white'
                    : 'border-cream/20 text-cream/70 hover:border-cream/50 hover:text-cream'
                }`}
              >
                {c.label}
                <span className="ml-2 opacity-50">{count}</span>
              </button>
            );
          })}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        {shown.map((m, i) => (
          <Reveal key={m.slug} variant="card" delay={(i % 2) * 0.08}>
            <button
              type="button"
              onClick={() => setOpenAt(murals.indexOf(m))}
              className="group block w-full border border-cream/10 text-left transition-colors hover:border-flame/60"
            >
              <div
                className={`relative overflow-hidden bg-ink-2 ${
                  m.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'
                }`}
              >
                <Image
                  src={m.src}
                  alt={m.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/90 py-4 text-center transition-transform duration-500 ease-out group-hover:translate-y-0">
                  <span className="micro text-cream">View full size</span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 p-5">
                <div>
                  <h3 className="text-lg font-bold tracking-tight transition-colors group-hover:text-flame">
                    {m.title}
                  </h3>
                  {m.location && <p className="micro mt-1.5 text-cream/45">{m.location}</p>}
                </div>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {openAt !== null && (
        <Lightbox
          murals={murals}
          index={openAt}
          onClose={() => setOpenAt(null)}
          onIndexChange={setOpenAt}
        />
      )}
    </>
  );
}
