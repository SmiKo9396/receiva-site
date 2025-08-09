import Link from 'next/link'

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src="/hero-bg.svg" alt="" className="w-full h-full object-cover"/>
      </div>
      <div className="section py-16 md:py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/85 border border-navy/10 px-3 py-1 text-sm mb-5 shadow-card">
            <span className="inline-block w-2 h-2 rounded-full bg-teal"></span>
            Active Receivables Management
          </div>
          <h1>Stop waiting for payments; Start growing your business</h1>
          <p className="text-lg md:text-xl text-navy/80 mt-5">
            Let Receiva <b>technology and personal service</b> — automated reminders,
            professional phone calls, and objective client feedback — to accelerate payments and surface growth opportunities.
          </p>
          <div className="mt-7 flex gap-3 flex-wrap">
            <Link href="#lead" className="btn-primary">Protect Your Cashflow</Link>
            <Link href="#how" className="btn-secondary">How It Works</Link>
          </div>
          <div className="text-sm text-navy/70 mt-4">Receiva</div>
        </div>
      </div>
    </section>
  )
}
