import Link from 'next/link';
import { site } from '@/data/site';
import { publications } from '@/data/press';

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="display text-4xl">
              Jenks<span className="text-flame">Art</span>
            </p>
            <p className="mt-4 max-w-sm text-cream/60">
              {site.role}, working out of {site.serviceAreas[1]}. Murals across{' '}
              {site.serviceAreas.slice(0, 3).join(', ')} and beyond.
            </p>
            <p className="micro mt-8 text-flame">{site.tagline}</p>
          </div>

          <div className="md:col-span-3">
            <p className="micro text-cream/40">Get in touch</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={site.phoneHref} className="text-lg transition-colors hover:text-flame">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-flame">
                  {site.email}
                </a>
              </li>
            </ul>
            <ul className="mt-6 flex gap-5">
              <li>
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="micro text-cream/60 transition-colors hover:text-flame"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="micro text-cream/60 transition-colors hover:text-flame"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="micro text-cream/40">Pages</p>
            <ul className="mt-5 space-y-3 text-cream/70">
              <li>
                <Link href="/murals" className="transition-colors hover:text-flame">
                  Murals
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-flame">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-flame">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="micro text-cream/40">As covered by</p>
            <ul className="mt-5 space-y-2 text-sm text-cream/50">
              {publications.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-cream/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="micro text-cream/35">
            © {site.year} {site.name} · {site.artist}
          </p>
          <p className="micro text-cream/35">{site.serviceAreas.join(' · ')}</p>
        </div>
      </div>
    </footer>
  );
}
