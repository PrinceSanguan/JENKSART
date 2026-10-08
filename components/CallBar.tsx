import { site } from '@/data/site';

/**
 * Sticky call/text bar, phones only.
 *
 * Deliberate: most enquiries for a trade like this arrive as a phone call or a
 * text, not a form submission. The form qualifies the job; this bar catches the
 * person who just wants to ring someone.
 */
export default function CallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-cream/10 md:hidden">
      <a
        href={site.phoneHref}
        className="micro bg-flame py-4 text-center text-white"
        aria-label={`Call JenksArt on ${site.phone}`}
      >
        Call Jenks
      </a>
      <a
        href={site.smsHref}
        className="micro bg-ink-2 py-4 text-center text-cream"
        aria-label={`Text JenksArt on ${site.phone}`}
      >
        Send a text
      </a>
    </div>
  );
}
