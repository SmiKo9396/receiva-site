// pages/thankyou.js
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

export default function ThankYou() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "lead_form_submitted",
        lead_source: "website",
      });
    }

    try {
      window.fbq && window.fbq("track", "Lead");
    } catch (e) {}
  }, []);

  return (
    <>
      <Head>
        <title>Thank You | Receiva</title>
        <meta name="robots" content="noindex,follow" />
      </Head>

      <main className="section py-16">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-wide text-teal mb-3">
            Active Receivables Management
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Thanks—your request has been received.
          </h1>
          <p className="text-gray-600 mb-8">
            We’ll review your details and reach out shortly. If this is urgent,
            call us at{" "}
            <a className="underline" href="tel:+14417993036">
              +1 (441) 799-3036
            </a>.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-navy/10 p-6">
              <h2 className="text-xl font-medium mb-2">What happens next</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>We’ll confirm your business details and invoice volume.</li>
                <li>We’ll propose the right receivables workflow.</li>
                <li>We’ll schedule a quick call to get you started.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-navy/10 p-6">
              <h2 className="text-xl font-medium mb-2">In the meantime</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Learn <a className="underline" href="/#how">how it works</a>.
                </li>
                <li>
                  See <a className="underline" href="/#who">who we help</a>.
                </li>
                <li>
                  Prefer to talk now?{" "}
                  <a className="underline" href="tel:+14417993036">Call us</a>.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <Link
              href="/"
              className="inline-flex items-center rounded-xl px-5 py-3 border border-navy/10 hover:border-navy/20"
            >
              Back to Home
            </Link>
            <a
              href="/#contact"
              className="inline-flex items-center rounded-xl px-5 py-3 bg-teal text-white hover:opacity-90"
            >
              Protect Your Cashflow
            </a>
          </div>

          <p className="mt-10 text-xs text-gray-500">
            If you reached this page by mistake, please{" "}
            <a className="underline" href="mailto:info@receiva.bm">
              email us
            </a>.
          </p>
        </div>
      </main>
    </>
  );
}