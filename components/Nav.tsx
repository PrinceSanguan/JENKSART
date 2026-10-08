'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { site } from '@/data/site';

const links = [
  { href: '/murals', label: 'Murals' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the drawer on navigation.
  useEffect(() => setOpen(false), [pathname]);

  // The home page has a full-bleed hero behind the bar; every other page does not.
  const solid = scrolled || open || pathname !== '/';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'border-b border-cream/10 bg-ink/95 backdrop-blur-sm' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="display text-xl tracking-tight" aria-label="JenksArt — home">
          Jenks<span className="text-flame">Art</span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`micro transition-colors hover:text-flame ${
                pathname === l.href ? 'text-flame' : 'text-cream/70'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className="micro border border-flame bg-flame px-5 py-2.5 text-white transition-colors hover:bg-flame-dim"
          >
            {site.phone}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="micro text-cream md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-cream/10 bg-ink px-6 pb-8 pt-6 md:hidden"
      >
        <div className="flex flex-col gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="display text-3xl">
              {l.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className="micro mt-2 border border-flame bg-flame px-5 py-4 text-center text-white"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
