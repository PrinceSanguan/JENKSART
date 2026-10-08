import Link from 'next/link';
import Hero from '@/components/Hero';
import MuralGrid from '@/components/MuralGrid';
import PromoVideo from '@/components/PromoVideo';
import Reveal from '@/components/Reveal';
import { murals } from '@/data/murals';
import { credentials, quotes } from '@/data/press';
import { services, site } from '@/data/site';

export default function Home() {
  const selected = murals.slice(0, 6);

  return (
    <>
      <Hero />

      {/* Credentials — the council work and the press, which his current site
          hides entirely. Placed directly under the hero because it is the
          single most persuasive thing about him. */}
      <section className="border-y border-cream/10 bg-ink-2">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {credentials.map((c) => (
              <li key={c} className="micro leading-relaxed text-cream/55">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Selected work */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <Reveal variant="heading" as="h2" className="display text-5xl md:text-6xl">
              <span className="block">Recent</span>
              <span className="outline-word block">work</span>
            </Reveal>
            <Reveal>
              <p className="mt-6 text-cream/65">
                Brand shutters, gable ends, nurseries and street portraits. Every one painted by
                hand, on site, by one man with a can.
              </p>
              <Link
                href="/murals"
                className="micro mt-8 inline-block border-b border-flame pb-1 text-flame transition-colors hover:text-cream hover:border-cream"
              >
                See all {murals.length} murals
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <MuralGrid murals={selected} />
          </div>
        </div>
      </section>

      {/* The promo film. Vertical, so it sits in a column beside the copy
          rather than stretched across the page. */}
      <section className="border-t border-cream/10 bg-ink-2">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-24">
            <div className="lg:col-span-5">
              <Reveal variant="card">
                <PromoVideo />
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal variant="heading" as="h2" className="display text-5xl md:text-6xl">
                <span className="block">Thirty seconds,</span>
                <span className="outline-word block">start to finish</span>
              </Reveal>
              <Reveal>
                <p className="mt-8 max-w-lg text-lg text-cream/70">
                  A dead wall, a can of paint, and the thing people stop to photograph afterwards.
                  Turn the sound on.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* His own line, given the space it deserves. */}
      <section className="border-y border-cream/10 bg-ink">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:py-32">
          <Reveal variant="heading" as="p" className="display text-5xl md:text-7xl">
            Prices to match{' '}
            <span className="text-flame">budgets</span>
          </Reveal>
          <Reveal>
            <p className="micro mt-8 text-cream/45">His words, not ours</p>
            <p className="mx-auto mt-6 max-w-xl text-cream/65">
              A kid&rsquo;s bedroom and a two-storey gable end are not the same job, and they are
              not priced like it. Tell him the wall and the budget, and he will tell you straight
              what is possible.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What he paints */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <Reveal variant="heading" as="h2" className="display text-5xl md:text-6xl">
          <span className="block">If it&rsquo;s got a wall,</span>
          <span className="outline-word block">he&rsquo;ll paint it</span>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.key} variant="card" delay={i * 0.1}>
              <div className="h-full border border-cream/10 p-8 transition-colors hover:border-cream/25 lg:p-10">
                <p className="micro text-flame">{s.title}</p>
                <p className="mt-5 text-2xl font-bold tracking-tight">{s.lead}</p>
                <ul className="mt-8 space-y-3 text-cream/65">
                  {s.items.map((item) => (
                    <li key={item} className="border-b border-cream/10 pb-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What other people say — all third-party, none of it self-claimed. */}
      <section className="border-t border-cream/10 bg-ink-2">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <Reveal variant="heading" as="h2" className="display text-4xl md:text-5xl">
            What other people say
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {quotes.map((q, i) => (
              <Reveal key={q.text} variant="card" delay={(i % 2) * 0.1}>
                <figure className="h-full border-l-2 border-flame pl-6">
                  <blockquote className="text-xl leading-snug text-cream/90 md:text-2xl">
                    &ldquo;{q.text}&rdquo;
                  </blockquote>
                  <figcaption className="micro mt-5 text-cream/45">{q.attribution}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Close */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-20">
          <div className="lg:col-span-7">
            <Reveal variant="heading" as="h2" className="display text-5xl md:text-7xl">
              <span className="block">Got a wall that</span>
              <span className="outline-word block">deserves better?</span>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-cream/65">
                Send a photo of the wall and a rough idea of what you want. He will come back with
                what it would take and what it would cost.
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
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
