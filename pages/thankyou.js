// pages/thankyou.tsx
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
// If you have shared layout parts, uncomment these:
// import Header from "@/components/Header"
// import Footer from "@/components/Footer"

export default function ThankYouPage() {
  return (
    <>
      <Head>
        <title>Thank You | Receiva</title>
        <meta name="description" content="Thanks for reaching out to Receiva. We’ll get back to you shortly." />
        <meta name="robots" content="noindex" />
      </Head>

      {/* <Header /> */}
      <main className="min-h-[70vh] bg-white">
        {/* hero */}
        <section className="section pt-16 md:pt-24 pb-8">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-3 rounded-2xl border border-navy/10 px-3 py-1.5 text-sm">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-teal/80" />
                Submission received
              </div>

              <h1 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight text-navy">
                Thanks — we’ve got your details
              </h1>
              <p className="mt-4 text-[17px] leading-7 text-navy/80">
                A Receiva specialist will review your message and reach out soon (typically within one business day).
                In the meantime, here’s what to expect and a few ways to speed things up.
              </p>

              {/* primary CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/#how"
                  className="inline-flex items-center rounded-2xl bg-navy px-5 py-3 text-white shadow-sm hover:opacity-95 transition"
                >
                  See how Receiva works
                </Link>
                <Link
                  href="/#who"
                  className="inline-flex items-center rounded-2xl border border-navy/15 bg-white px-5 py-3 text-navy hover:border-navy/25 transition"
                >
                  Who we’re a fit for
                </Link>
              </div>

              {/* quick bullets */}
              <ul className="mt-8 space-y-3 text-navy/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-teal/80" />
                  We’ll confirm the scope, invoice volume, systems, and ideal go-live date.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-teal/80" />
                  If you’re ready, we can run a sample invoice and reminder flow this week.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-teal/80" />
                  Prefer to talk now? Book a call below.
                </li>
              </ul>
            </div>

            {/* right card */}
            <div className="rounded-3xl border border-navy/10 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-navy">Speed up onboarding</h2>
              <p className="mt-2 text-navy/80">Have these handy and we can move fast:</p>
              <div className="mt-5 grid gap-4">
                <div className="rounded-2xl border border-navy/10 p-4">
                  <div className="text-sm font-medium text-navy">Your accounting system</div>
                  <div className="text-sm text-navy/70">QuickBooks / Xero / ERP + invoicing cadence</div>
                </div>
                <div className="rounded-2xl border border-navy/10 p-4">
                  <div className="text-sm font-medium text-navy">Average monthly invoices</div>
                  <div className="text-sm text-navy/70">Volume, payment terms, major customer types</div>
                </div>
                <div className="rounded-2xl border border-navy/10 p-4">
                  <div className="text-sm font-medium text-navy">Reminders & tone</div>
                  <div className="text-sm text-navy/70">Brand voice, send windows, escalation rules</div>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/#contact"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-teal px-5 py-3 text-white shadow-sm hover:opacity-95 transition"
                >
                  Book a call
                </Link>
                <p className="mt-3 text-center text-xs text-navy/60">
                  Or email us at <a className="underline" href="mailto:hello@receiva.bm">hello@receiva.bm</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* social proof / strip */}
        <section className="bg-navy/3 border-t border-navy/5">
          <div className="section py-10">
            <div className="grid sm:grid-cols-3 gap-4">
              <StatCard kpi="Minutes" value="Under 60" blurb="to connect your invoice flow" />
              <StatCard kpi="Recovery uplift" value="5–15%" blurb="typical improvement in DSO" />
              <StatCard kpi="Markets" value="Bermuda • Cayman • BVI" blurb="local expertise" />
            </div>
          </div>
        </section>

        {/* helpful links */}
        <section className="section py-12">
          <div className="rounded-3xl border border-navy/10 p-6 md:p-8">
            <h3 className="text-lg font-semibold text-navy">Helpful links</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/#how" className="chip">Implementation steps</Link>
              <Link href="/#faq" className="chip">FAQ</Link>
              <Link href="/#contact" className="chip">Talk to sales</Link>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}

      {/* Optional: fire conversion events for analytics tools that key off this page */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ event: 'conversion_thankyou' });
            if (window.fbq) { fbq('track', 'Lead'); }
          `,
        }}
      />
      <style jsx global>{`
        .chip {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 0.9rem;
          border-radius: 1rem;
          border: 1px solid rgba(10,37,64,0.1);
          background: #fff;
          color: rgb(10,37,64);
          font-size: 0.95rem;
        }
      `}</style>
    </>
  )
}

// Small stat card component for the strip
function StatCard({ kpi, value, blurb }: { kpi: string; value: string; blurb: string }) {
  return (
    <div className="rounded-2xl border border-navy/10 bg-white p-5 text-center shadow-sm">
      <div className="text-xs uppercase tracking-wide text-navy/60">{kpi}</div>
      <div className="mt-1 text-2xl font-semibold text-navy">{value}</div>
      <div className="mt-1 text-sm text-navy/70">{blurb}</div>
    </div>
  )
}