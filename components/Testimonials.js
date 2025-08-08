export default function Testimonials(){
  const quotes = [
    ["“Receiva saves me hours every week.”","Jason, Retail Owner"],
    ["“Billing’s no longer a headache.”","Andre, Contractor"],
    ["“Local, fast, and reliable.”","Jack, Professional Services"]
  ]
  return (
    <section className="bg-white">
      <div className="section py-16 md:py-24">
        <h2>Local Businesses Trust Receiva</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {quotes.map(([q,n]) => (
            <figure key={n} className="card">
              <blockquote className="text-navy/90">{q}</blockquote>
              <figcaption className="mt-4 text-sm text-navy/60">{n}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-6 text-sm text-navy/60">Average payment time reduced from 45 days to 25 days.</div>
      </div>
    </section>
  )
}
