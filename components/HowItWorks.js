export default function HowItWorks() {
  return (
    <section id="how" className="bg-white">
    
        Getting Started Is Simple
      </h2>

      {/* 1 col on mobile, 2 on small screens, 3 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StepCard
          icon="/icons/discovery.svg"
          title="1. We learn your business"
          body="We get to know your industry, customers, and payment habits so our approach feels seamless."
        />
        <StepCard
          icon="/icons/invoice-send.svg"
          title="2. We create & send your invoices"
          body="Accurate, on-time delivery reduces disputes and sets clear expectations."
        />
        <StepCard
          icon="/icons/reminder-bell.svg"
          title="3. We send smart reminders"
          body="Automated, well-timed nudges keep payments on track without hurting relationships."
        />
        <StepCard
          icon="/icons/call-headset.svg"
          title="4. We make professional calls"
          body="Courteous follow-ups resolve concerns and confirm payment dates."
        />
        <StepCard
          icon="/icons/receipt-check.svg"
          title="5. We confirm receipt"
          body="We ensure clients have the invoice, understand terms, and are ready to pay."
        />
        <StepCard
          icon="/icons/feedback-chat.svg"
          title="6. We collect valuable feedback"
          body="Insights reveal upsell opportunities, strengthen relationships, and improve cashflow."
        />
      </div>
    </section>
  );
}

/* Reusable step card */
function StepCard({ icon, title, body }) {
  return (
    <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
      <img src={icon} alt="" aria-hidden="true" className="w-8 h-8 mb-4" />
      <p className="text-lg md:text-xl font-semibold mb-2">{title}</p>
      <p className="text-slate-600">{body}</p>
    </div>
  );
}
