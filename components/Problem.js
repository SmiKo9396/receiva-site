export default function Problem(){
  return (
    <section className="bg-white">
      <div className="section py-16 md:py-24 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2>Late Payments Are Costing Your Business More Than You Think</h2>
          <div className="grid gap-4 mt-6">
            <div className="card flex items-start gap-3">
              <img src="/icons/cash.svg" className="w-8 h-8" alt="Cash flow"/>
              <div><b>Cash Flow Gaps</b><div className="text-navy/75">Unpaid invoices make it harder to pay staff, suppliers, and yourself.</div></div>
            </div>
            <div className="card flex items-start gap-3">
              <img src="/icons/time.svg" className="w-8 h-8" alt="Time"/>
              <div><b>Time Wasted Chasing</b><div className="text-navy/75">Following up on payments pulls your attention away from running your business.</div></div>
            </div>
            <div className="card flex items-start gap-3">
              <img src="/icons/heart.svg" className="w-8 h-8" alt="Relationships"/>
              <div><b>Damaged Relationships</b><div className="text-navy/75">Awkward payment conversations can hurt client goodwill.</div></div>
            </div>
            <div className="card flex items-start gap-3">
              <img src="/icons/insight.svg" className="w-8 h-8" alt="Insights"/>
              <div><b>Missed Opportunities</b><div className="text-navy/75">Without feedback, you may never spot upsell potential or service issues.</div></div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-sand border border-navy/10 p-6 md:p-8 shadow-card">
          <h3 className="text-2xl font-semibold">Receiva’s Solution</h3>
          <p className="text-navy/80 mt-3">
            We take over your receivables with <b>Proactive Receivables Management</b>, combining automation with 
            professional follow‑ups, ensuring invoices are paid quickly and client relationships stay positive.
          </p>
          <ul className="mt-5 space-y-3 text-navy/80">
            <li><b>Professional phone calls</b> that preserve goodwill.</li>
            <li><b>Timely email reminders</b> that keep invoices top‑of‑mind.</li>
            <li><b>Objective feedback collection</b> for upsell and service improvements.</li>
            <li><b>Clear reporting</b> so you always know where cash is.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
