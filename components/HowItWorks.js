export default function HowItWorks() {
  return (
    <section id="how" className="bg-white scroll-mt-28"> {/* offset for sticky header */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
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