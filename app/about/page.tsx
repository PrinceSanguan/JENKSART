import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { notableProjects, publications, quotes } from '@/data/press';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Steve “Jenks” Jenkins is a street artist and muralist from Llanelli, commissioned by Carmarthenshire County Council and covered across the Welsh press.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <div className="pb-24 pt-32 lg:pb-32 lg:pt-44">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal variant="heading" as="h1" className="display text-6xl md:text-8xl">
          <span className="block">Steve</span>
          <span className="outline-word block">Jenkins</span>
        </Reveal>
        <Reveal>
          <p className="micro mt-8 text-flame">{site.role} · Llanelli</p>
        </Reveal>
      </div>

      {/* Full-bleed band */}
      <Reveal variant="image" className="mt-16 lg:mt-24">
        <div className="relative aspect-[21/10] w-full overflow-hidden bg-ink-2">
          <Image
            src="/murals/leigh-halfpenny-gorseinon.jpg"
            alt="Gable-end mural of Leigh Halfpenny in Gorseinon, Swansea"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      {/* The story — 4/8 editorial grid */}
      <div className="mx-auto mt-20 max-w-7xl px-6 lg:mt-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="micro text-cream/40">The story</p>
              <div className="mt-6 h-px w-16 bg-flame" />
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal>
              <p className="text-2xl leading-snug text-cream md:text-3xl">
                It started in the eighties, with breakdancing films and hip-hop records, and for a
                long time it stayed a hobby.
              </p>
            </Reveal>
            <Reveal>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-cream/70">
                <p>
                  Jenks trained as an engineer and worked a normal job for years, painting around
                  it. When lockdown came and the work stopped, he painted a couple of tribute
                  murals for the NHS — and the response changed things. The requests kept coming.
                  He held onto the day job for another year before deciding to paint full time.
                </p>
                <p>
                  Since then it has been gyms, restaurants, hospitals, schools, bars, nurseries,
                  shopfronts and private commissions — along with a run of community murals across
                  Carmarthenshire, several of which he has paid for out of his own pocket because
                  he thought the wall deserved it.
                </p>
                <p className="border-l-2 border-flame pl-6 text-cream">
                  When Llanelli went without one, he funded a five-panel mural for his own hometown
                  and finished it in a week. &ldquo;I&rsquo;ve painted a few of these around
                  Carmarthenshire funded by the council,&rdquo; he said at the time, &ldquo;and my
                  hometown was missing one.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Notable commissions */}
      <div className="mx-auto mt-24 max-w-7xl px-6 lg:mt-32">
        <Reveal variant="heading" as="h2" className="display text-4xl md:text-5xl">
          Notable commissions
        </Reveal>
        <div className="mt-14 grid gap-px border border-cream/10 bg-cream/10 md:grid-cols-2">
          {notableProjects.map((p, i) => (
            <Reveal key={p.title} variant="card" delay={(i % 2) * 0.08}>
              <article className="h-full bg-ink p-8 lg:p-10">
                <p className="micro text-flame">{p.where}</p>
                <h3 className="mt-4 text-2xl font-bold tracking-tight">{p.title}</h3>
                <p className="mt-4 leading-relaxed text-cream/65">{p.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Press */}
      <div className="mx-auto mt-24 max-w-7xl px-6 lg:mt-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="micro text-cream/40">In the press</p>
              <div className="mt-6 h-px w-16 bg-flame" />
              <ul className="mt-8 space-y-2 text-cream/50">
                {publications.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-10">
              {quotes.map((q) => (
                <Reveal key={q.text}>
                  <figure>
                    <blockquote className="text-2xl leading-snug text-cream md:text-3xl">
                      &ldquo;{q.text}&rdquo;
                    </blockquote>
                    <figcaption className="micro mt-4 text-cream/45">{q.attribution}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Close */}
      <div className="mx-auto mt-24 max-w-7xl px-6 lg:mt-32">
        <Reveal>
          <div className="border-t border-cream/10 pt-14">
            <p className="display text-4xl md:text-5xl">
              Want one of your <span className="text-flame">own?</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="micro border border-flame bg-flame px-8 py-4 text-white transition-colors hover:bg-flame-dim"
              >
                Start an enquiry
              </Link>
              <a
                href={site.phoneHref}
                className="micro border border-cream/30 px-8 py-4 transition-colors hover:border-cream hover:bg-cream hover:text-ink"
              >
                {site.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
