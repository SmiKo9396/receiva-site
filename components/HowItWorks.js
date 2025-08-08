export default function HowItWorks(){
  return (
    <section id="how" className="bg-white">
      <div className="section py-16 md:py-24">
        <h2>Getting Started Is Simple</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="card">
            <img src="/icons/mail.svg" className="w-10 h-10" alt="Send"/>
            <h3 className="text-xl font-semibold mt-4">1. We send your invoices</h3>
            <p className="mt-2 text-navy/80">Accurate, on‑time delivery reduces payment disputes.</p>
          </div>
          <div className="card">
            <img src="/icons/phone.svg" className="w-10 h-10" alt="Follow up"/>
            <h3 className="text-xl font-semibold mt-4">2. We follow up with tech + calls</h3>
            <p className="mt-2 text-navy/80">Smart reminders plus professional phone calls keep payments on track.</p>
          </div>
          <div className="card">
            <img src="/icons/insight.svg" className="w-10 h-10" alt="Insights"/>
            <h3 className="text-xl font-semibold mt-4">3. We gather insights</h3>
            <p className="mt-2 text-navy/80">Feedback reveals upsell opportunities and service improvements.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
