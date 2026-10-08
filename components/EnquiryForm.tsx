'use client';

import { useState, type FormEvent } from 'react';
import { site } from '@/data/site';

const field =
  'mt-2 w-full border-b border-cream/20 bg-transparent py-4 text-cream transition-colors focus:border-flame focus:outline-none';
const label = 'micro text-cream/40 transition-colors group-focus-within:text-flame';

const sizes = [
  'Not sure yet',
  'Small — a single panel or door',
  'Medium — one wall or a shutter',
  'Large — a gable end or several walls',
];

const budgets = ['Not sure yet', 'Under £500', '£500 – £1,500', '£1,500 – £3,000', '£3,000+'];

const FIELD_LABELS: Record<string, string> = {
  name: 'Name',
  phone: 'Phone',
  email: 'Email',
  town: 'Where the wall is',
  setting: 'Indoor or outdoor',
  size: 'Rough size',
  budget: 'Budget',
  message: 'What they have in mind',
};

/** Turns the answers into a readable enquiry rather than a dump of form keys. */
function formatEnquiry(data: Record<string, FormDataEntryValue>) {
  return Object.entries(FIELD_LABELS)
    .filter(([k]) => data[k])
    .map(([k, l]) => `${l}: ${data[k]}`)
    .join('\n');
}

/**
 * The enquiry form hands its answers to the visitor's own mail app, addressed
 * to Jenks with everything filled in.
 *
 * No form service, no API key, no account to set up — which means there is
 * nothing to configure before this site goes live and nothing that can quietly
 * stop working later. The value of the form is the questions it asks: a wall's
 * town, size, indoor or out, and a budget, so a quote does not take eight
 * messages to arrive at.
 */
export default function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const subject = `Mural enquiry from ${data.name || 'the website'}`;

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(formatEnquiry(data))}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-flame/40 bg-flame/5 p-10">
        <p className="display text-3xl">
          Nearly there. <span className="text-flame">Nice one.</span>
        </p>
        <p className="mt-4 text-cream/75">
          Your email app should have opened with the details filled in — just press send. If
          it&rsquo;s urgent, ring {site.phone}; he answers his phone faster than his inbox.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={site.phoneHref}
            className="micro border border-flame bg-flame px-8 py-4 text-white transition-colors hover:bg-flame-dim"
          >
            Call {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="micro border border-cream/30 px-8 py-4 transition-colors hover:border-cream"
          >
            {site.email}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-12">
      <div className="group">
        <label className={label} htmlFor="name">
          Your name
        </label>
        <input id="name" name="name" required autoComplete="name" className={field} />
      </div>

      <div className="grid gap-12 sm:grid-cols-2">
        <div className="group">
          <label className={label} htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
        </div>
        <div className="group">
          <label className={label} htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
      </div>

      <div className="grid gap-12 sm:grid-cols-2">
        <div className="group">
          <label className={label} htmlFor="town">
            Where is the wall?
          </label>
          <input id="town" name="town" placeholder="Town or postcode" className={field} />
        </div>
        <div className="group">
          <label className={label} htmlFor="setting">
            Indoor or outdoor?
          </label>
          <select id="setting" name="setting" className={field} defaultValue="Outdoor">
            <option className="bg-ink">Outdoor</option>
            <option className="bg-ink">Indoor</option>
            <option className="bg-ink">Not sure</option>
          </select>
        </div>
      </div>

      <div className="grid gap-12 sm:grid-cols-2">
        <div className="group">
          <label className={label} htmlFor="size">
            Rough size
          </label>
          <select id="size" name="size" className={field} defaultValue={sizes[0]}>
            {sizes.map((s) => (
              <option key={s} className="bg-ink">
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="group">
          <label className={label} htmlFor="budget">
            Budget range
          </label>
          <select id="budget" name="budget" className={field} defaultValue={budgets[0]}>
            {budgets.map((b) => (
              <option key={b} className="bg-ink">
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="group">
        <label className={label} htmlFor="message">
          What do you have in mind?
        </label>
        <textarea id="message" name="message" rows={4} required className={`${field} resize-none`} />
      </div>

      <button
        type="submit"
        className="micro w-full border border-flame bg-flame px-16 py-6 text-white transition-colors hover:bg-flame-dim"
      >
        Send enquiry
      </button>

      <p className="text-sm text-cream/40">
        A photo of the wall helps more than anything. Jenks will ask for one when he replies.
      </p>
    </form>
  );
}
