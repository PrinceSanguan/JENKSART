import type { Metadata } from 'next';
import EnquiryForm from '@/components/EnquiryForm';
import Reveal from '@/components/Reveal';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get a mural quote from JenksArt. Call 07817 428594, text, or send the details of your wall. Covering Swansea, Llanelli and South Wales.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 lg:pb-32 lg:pt-44">
      <Reveal variant="heading" as="h1" className="display text-6xl md:text-8xl">
        Contact<span className="text-flame">.</span>
      </Reveal>

      <div className="mt-20 grid gap-16 lg:grid-cols-12 lg:gap-24">
        <aside className="lg:col-span-4">
          <Reveal>
            <p className="micro text-cream/40">Straight to Jenks</p>
            <div className="mt-6 space-y-5">
              <a href={site.phoneHref} className="block text-3xl font-bold tracking-tight hover:text-flame">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="block text-cream/70 hover:text-flame">
                {site.email}
              </a>
            </div>

            <div className="mt-12">
              <p className="micro text-cream/40">Covering</p>
              <p className="mt-5 text-cream/70">{site.serviceAreas.join(' · ')}</p>
            </div>

            <div className="mt-12">
              <p className="micro text-cream/40">Also here</p>
              <ul className="mt-5 space-y-3">
                <li>
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cream/70 hover:text-flame"
                  >
                    Facebook — {site.proof.followers} followers
                  </a>
                </li>
                <li>
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cream/70 hover:text-flame"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            <p className="micro mt-12 border-t border-cream/10 pt-8 leading-relaxed text-flame">
              {site.tagline}
            </p>
          </Reveal>
        </aside>

        <div className="lg:col-span-8">
          <Reveal>
            <p className="max-w-xl text-lg text-cream/70">
              The more you can tell him up front, the quicker he can give you a real answer rather
              than a guess.
            </p>
          </Reveal>
          <div className="mt-14">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
}
