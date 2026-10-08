'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef } from 'react';
import type { Mural } from '@/data/murals';
import { getLenis } from '@/lib/lenis';

export default function Lightbox({
  murals,
  index,
  onClose,
  onIndexChange,
}: {
  murals: Mural[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const mural = murals[index];

  const next = useCallback(
    () => onIndexChange((index + 1) % murals.length),
    [index, murals.length, onIndexChange],
  );
  const prev = useCallback(
    () => onIndexChange((index - 1 + murals.length) % murals.length),
    [index, murals.length, onIndexChange],
  );

  useEffect(() => {
    // Pause smooth scroll and lock the page behind the overlay.
    getLenis()?.stop();
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      getLenis()?.start();
    };
  }, [onClose, next, prev]);

  if (!mural) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={mural.title}
      className="fixed inset-0 z-[60] flex flex-col bg-ink/97 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex items-center justify-between border-b border-cream/10 px-6 py-4">
        <p className="micro text-cream/50">
          {index + 1} / {murals.length}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="micro text-cream transition-colors hover:text-flame"
        >
          Close
        </button>
      </div>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center p-4 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={mural.src}
          alt={mural.alt}
          width={mural.width}
          height={mural.height}
          sizes="100vw"
          className="max-h-full w-auto max-w-full object-contain"
        />
      </div>

      <div
        className="border-t border-cream/10 px-6 py-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="display text-2xl">{mural.title}</h2>
            {mural.location && <p className="micro mt-2 text-flame">{mural.location}</p>}
            <p className="mt-3 max-w-xl text-sm text-cream/65">{mural.blurb}</p>
          </div>
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={prev}
              className="micro border border-cream/25 px-5 py-3 transition-colors hover:border-cream"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={next}
              className="micro border border-cream/25 px-5 py-3 transition-colors hover:border-cream"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
