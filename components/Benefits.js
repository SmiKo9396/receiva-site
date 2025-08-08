export default function Benefits(){
  const benefits = [
    ["Faster payments","Better cash flow for payroll, suppliers, and growth."],
    ["Proactive follow‑ups","Real phone calls keep your receivables top of mind for clients."],
    ["Actionable insights","Customer feedback helps you upsell and refine your services."],
    ["Local expertise","Service you can trust, from people who understand Bermuda business."],
  ]
  return (
    <section className="bg-white">
      <div className="section py-16 md:py-24">
        <h2>More Than Just Invoicing</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {benefits.map(([t,d]) => (
            <div key={t} className="card">
              <h3 className="text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-navy/80">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
