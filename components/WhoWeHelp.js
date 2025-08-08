export default function WhoWeHelp(){
  const items = [
    ["Trades & Contractors","Keep your projects funded and your team paid."],
    ["Retail & E‑commerce","Manage high transaction volumes with ease."],
    ["Professional Services","Smooth cash flow for law firms, accountants, and consultants."],
    ["Medical & Dental Practices","Reduce overdue payments and improve patient billing experiences."],
    ["Hospitality & Tourism","Get payments in before the next busy season."],
    ["Petrol Stations","Streamline fleet and customer account billing."],
  ]
  return (
    <section id="who" className="bg-white">
      <div className="section py-16 md:py-24">
        <h2>Built for Bermuda Businesses Like Yours</h2>
        <p className="mt-4 text-navy/80 max-w-3xl">
          If your business invoices between 20 and 600 clients per month and earns $250k–$5M per year, Receiva is designed for you.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map(([t,d]) => (
            <div key={t} className="card">
              <h3 className="text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-navy/80">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
