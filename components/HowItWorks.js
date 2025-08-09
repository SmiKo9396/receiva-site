export default function HowItWorks(){
  return (
        <section className="section py-16 md:py-20">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">
        Getting Started Is Simple
      </h2>

      {/* 1 col on mobile, 2 on small screens, 3 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1 */}
        <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
          <img src="/icons/insight.svg" alt="" className="w-8 h-8 mb-4" aria-hidden="true" />
          <p className="text-lg md:text-xl font-semibold mb-2">1. We learn your business</p>
          <p className="text-slate-600">
            We get to know your industry, customers, and payment habits so our approach feels seamless.
          </p>
        </div>

        {/* 2 */}
        <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
          <img src="/icons/mail.svg" alt="" className="w-8 h-8 mb-4" aria-hidden="true" />
          <p className="text-lg md:text-xl font-semibold mb-2">2. We create & send your invoices</p>
          <p className="text-slate-600">
            Accurate, on-time delivery reduces disputes and sets clear expectations.
          </p>
        </div>

        {/* 3 */}
        <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
          <img src="/icons/insight.svg" alt="" className="w-8 h-8 mb-4" aria-hidden="true" />
          <p className="text-lg md:text-xl font-semibold mb-2">3. We send smart reminders</p>
          <p className="text-slate-600">
            Automated, well-timed nudges keep payments on track without hurting relationships.
          </p>
        </div>

        {/* 4 */}
        <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
          <img src="/icons/phone.svg" alt="" className="w-8 h-8 mb-4" aria-hidden="true" />
          <p className="text-lg md:text-xl font-semibold mb-2">4. We make professional calls</p>
          <p className="text-slate-600">
            Courteous follow-ups resolve concerns and confirm payment dates.
          </p>
        </div>

        {/* 5 */}
        <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
          <img src="/icons/mail.svg" alt="" className="w-8 h-8 mb-4" aria-hidden="true" />
          <p className="text-lg md:text-xl font-semibold mb-2">5. We confirm receipt</p>
          <p className="text-slate-600">
            We ensure clients have the invoice, understand terms, and are ready to pay.
          </p>
        </div>

        {/* 6 */}
        <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
          <img src="/icons/insight.svg" alt="" className="w-8 h-8 mb-4" aria-hidden="true" />
          <p className="text-lg md:text-xl font-semibold mb-2">6. We collect valuable feedback</p>
          <p className="text-slate-600">
            Insights reveal upsell opportunities, strengthen relationships, and improve cashflow.
          </p>
        </div>
      </div>
    </section>
  );
}