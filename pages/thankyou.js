// pages/thankyou.js
import Head from "next/head"
import Link from "next/link"

// ⬇️ Adjust these import paths if your components are in a different folder
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank you | Receiva</title>
        <meta name="robots" content="noindex" />
        <meta name="description" content="Thanks for getting in touch with Receiva." />
      </Head>

      <Header />

      <main className="bg-white">
        <section className="section py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            {/* Subtle confirmation chip */}
            <div className="inline-flex items-center gap-2 rounded-full border border-navy/10 px-3 py-1 text-sm text-navy/70">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-teal/80" aria-hidden />
              Request received
            </div>

            <h1 className="mt-5 text-3xl md:text-4xl font-semibold text-navy">
              Thanks for getting in touch
            </h1>

            <p className="mt-3 text-[17px] leading-7 text-navy/80">
              Someone from Receiva will reach out within <strong>two business days</strong>.
            </p>

            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-2xl bg-navy px-5 py-3 text-white shadow-sm hover:opacity-95 transition"
                aria-label="Go back to the Receiva homepage"
              >
                Back to homepage
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Optional: analytics conversion event */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ event: 'conversion_thankyou' });
          `,
        }}
      />
    </>
  )
}
