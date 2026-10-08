'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { setLenis } from '@/lib/lenis';

/**
 * One Lenis instance for the whole site, wired into GSAP's ticker so smooth
 * scroll and ScrollTrigger stay in step.
 *
 * Mounted once in the root layout — deliberately not per page, which is the
 * mistake in the site this design is based on (every page there spins up its
 * own instance).
 */
export default function SmoothScroll() {
  useEffect(() => {
    // Tell the stylesheet JS is alive, so reveal targets may start hidden.
    document.documentElement.classList.add('js-ready');

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    gsap.registerPlugin(ScrollTrigger);

    if (reduced) {
      // No smooth scroll, no ticker hijack — just let ScrollTrigger work natively.
      ScrollTrigger.refresh();
      return () => {
        document.documentElement.classList.remove('js-ready');
      };
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    // Shared so modals can pause smooth scroll while they are open.
    setLenis(lenis);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      setLenis(null);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      document.documentElement.classList.remove('js-ready');
    };
  }, []);

  return null;
}
