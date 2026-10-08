'use client';

import { useEffect, useRef, type ElementType, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type Variant = 'heading' | 'text' | 'image' | 'card';

/**
 * Scroll reveal. The four variants are the vocabulary the whole site animates
 * with — keeping them in one place is what stops twelve sections each
 * inventing their own timing.
 *
 * Marked with `data-reveal`, which the stylesheet hides only after JS loads,
 * so nothing is invisible if the script fails.
 */
export default function Reveal({
  children,
  variant = 'text',
  delay = 0,
  as: Tag = 'div',
  className,
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  as?: ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(el, { opacity: 1, clearProps: 'transform' });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const common = {
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
      delay,
    };

    const ctx = gsap.context(() => {
      switch (variant) {
        // Letter-spacing collapses as the heading settles.
        case 'heading':
          gsap.fromTo(
            el,
            { opacity: 0, y: 60, letterSpacing: '0.18em' },
            { opacity: 1, y: 0, letterSpacing: '-0.045em', duration: 1.4, ease: 'power4.out', ...common },
          );
          break;

        // Clip-path opens outward while the image de-zooms.
        case 'image':
          gsap.fromTo(
            el,
            { opacity: 0, scale: 1.12, clipPath: 'inset(8% 8% 8% 8%)' },
            {
              opacity: 1,
              scale: 1,
              clipPath: 'inset(0% 0% 0% 0%)',
              duration: 1.5,
              ease: 'power3.out',
              ...common,
            },
          );
          break;

        case 'card':
          gsap.fromTo(
            el,
            { opacity: 0, y: 70, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: 'power4.out', ...common },
          );
          break;

        default:
          gsap.fromTo(
            el,
            { opacity: 0, y: 32 },
            { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', ...common },
          );
      }
    }, el);

    return () => ctx.revert();
  }, [variant, delay]);

  return (
    <Tag ref={ref} data-reveal className={className}>
      {children}
    </Tag>
  );
}
