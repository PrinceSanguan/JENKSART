import type Lenis from 'lenis';

/**
 * Module-level handle on the single Lenis instance.
 *
 * Deliberately not `window.lenis` — Lenis ships its own global declaration for
 * that name and the two collide. A module singleton is type-safe and keeps the
 * dependency explicit.
 */
let instance: Lenis | null = null;

export const setLenis = (l: Lenis | null) => {
  instance = l;
};

export const getLenis = () => instance;
