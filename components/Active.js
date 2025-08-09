export default function Active() {
  return (
    <section className="bg-teal text-white"> {/* restore your custom color */}
      <div className="section py-10 md:py-14">
        {/* Outer grid: heading + features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <h2 className="text-2xl md:text-3xl font-semibold md:col-span-1">
            Active Receivables Management
          </h2>

          {/* Features grouped; 1 col on mobile, 3 cols >= sm */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <img src="/icons/phone.svg" alt="" className="w-6 h-6 md:w-8 md:h-8 shrink-0" />
              <p className="text-base leading-6">Professional, courteous phone calls</p>
            </div>

            <div className="flex items-start gap-3">
              <img src="/icons/mail.svg" alt="" className="w-6 h-6 md:w-8 md:h-8 shrink-0" />
              <p className="text-base leading-6">Smart automated reminders</p>
            </div>

            <div className="flex items-start gap-3">
              <img src="/icons/insight.svg" alt="" className="w-6 h-6 md:w-8 md:h-8 shrink-0" />
              <p className="text-base leading-6">Actionable customer feedback</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}