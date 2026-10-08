'use client';

import { useRef, useState } from 'react';

/**
 * The 30-second promo, in a phone-shaped frame.
 *
 * Autoplays muted and looping, because that is the only autoplay browsers
 * allow, with one control to turn the sound on. There is a voice-over, so the
 * muted loop is the trailer and the unmuted play is the actual film.
 */
export default function PromoVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [sound, setSound] = useState(false);

  function toggleSound() {
    const v = ref.current;
    if (!v) return;
    const next = !sound;
    v.muted = !next;
    setSound(next);
    if (next) {
      v.currentTime = 0;
      void v.play();
    }
  }

  return (
    <div className="relative mx-auto w-full max-w-[360px]">
      <div className="relative aspect-[9/16] overflow-hidden border border-cream/10 bg-ink-2">
        <video
          ref={ref}
          src="/promo-web.mp4"
          poster="/promo-poster.jpg"
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          className="h-full w-full object-cover"
        />
      </div>
      <button
        type="button"
        onClick={toggleSound}
        className="micro mt-5 w-full border border-cream/25 py-3.5 transition-colors hover:border-flame hover:text-flame"
      >
        {sound ? 'Mute' : 'Play with sound'}
      </button>
    </div>
  );
}
