export default function Active(){
  return (
    <section className="bg-teal text-white">
      <div className="section py-10 md:py-14 grid md:grid-cols-4 gap-6">
        <div className="col-span-4 md:col-span-1 text-2xl font-semibold">Active Receivables Management</div>
        <div className="flex items-center gap-3"><img src="/icons/phone.svg" className="w-8 h-8" alt="Phone"/><div>Professional, courteous phone calls</div></div>
        <div className="flex items-center gap-3"><img src="/icons/mail.svg" className="w-8 h-8" alt="Mail"/><div>Smart automated reminders</div></div>
        <div className="flex items-center gap-3"><img src="/icons/insight.svg" className="w-8 h-8" alt="Insights"/><div>Actionable customer feedback</div></div>
      </div>
    </section>
  )
}
