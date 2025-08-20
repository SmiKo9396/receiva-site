import { useRouter } from "next/router"          // ✅ Pages Router (keep this)
import { useEffect, useState } from "react"

function getUTMs() {
  if (typeof window === "undefined") return {}
  const params = new URLSearchParams(window.location.search)
  const fields = ["utm_source","utm_medium","utm_campaign","utm_term","utm_content"]
  const out = {}
  fields.forEach(f => { const v = params.get(f); if (v) out[f] = v })
  out.page_url = window.location.href
  return out
}

export default function LeadMagnet(){
  const [status, setStatus] = useState("")
  const [utms, setUtms] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)   // ✅ prevent double submits
  const router = useRouter()

  useEffect(() => { setUtms(getUTMs()) }, [])

  async function handleSubmit(e){
    e.preventDefault()
    if (isSubmitting) return
    setIsSubmitting(true)
    setStatus("")

    try {
      // build payload from form + UTM fields
      const form = new FormData(e.target)
      Object.entries(utms).forEach(([k, v]) => {
        if (v != null) form.append(k, String(v))            // ✅ ensure strings
      })
      const data = Object.fromEntries(form.entries())

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },    // ✅ matches JSON body
        body: JSON.stringify(data)
      })

      if (!res.ok) throw new Error("Submit failed")

      // optional: clear form before redirect (keeps UX tidy if redirect is delayed)
      e.target.reset()

      // ✅ redirect only on success
      router.push("/thankyou")
    } catch (err){
      console.error(err)
      setStatus("Something went wrong. Please try again.")
      setIsSubmitting(false)                                 // allow retry
    }
  }

  return (
    <section id="lead" className="bg-white">
      <div className="section py-16 md:py-24">
        <div className="rounded-2xl bg-teal/5 border border-teal/20 p-8 md:p-12 shadow-card">
          <h2>See How Much Faster You Could Get Paid</h2>
          <p className="mt-3 text-navy/80">
            Book your free, no-obligation receivables review today and discover how our active management can improve cash flow and reveal growth opportunities.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 grid md:grid-cols-4 gap-4" noValidate>
            <input name="firstName" required className="rounded-2xl border border-navy/10 px-4 py-3" placeholder="First name"/>
            <input name="lastName" required className="rounded-2xl border border-navy/10 px-4 py-3" placeholder="Last name"/>
            <input name="jobTitle" className="rounded-2xl border border-navy/10 px-4 py-3" placeholder="Job title"/>
            <input name="businessName" required className="rounded-2xl border border-navy/10 px-4 py-3" placeholder="Business name"/>

            <select name="invoiceVolume" required className="rounded-2xl border border-navy/10 px-4 py-3">
              <option value="">Monthly invoice volume</option>
              <option>Less than 20</option>
              <option>20 – 50</option>
              <option>50 – 100</option>
              <option>100 – 200</option>
              <option>200 – 300</option>
              <option>300+</option>
            </select>

            <select name="invoiceValue" required className="rounded-2xl border border-navy/10 px-4 py-3">
              <option value="">Value of invoices sent monthly</option>
              <option>Less than $20k</option>
              <option>$20k – $50k</option>
              <option>$50k – $100k</option>
              <option>$100k+</option>
            </select>

            <input type="email" name="email" required className="rounded-2xl border border-navy/10 px-4 py-3" placeholder="Email"/>
            <input name="phone" required className="rounded-2xl border border-navy/10 px-4 py-3" placeholder="Phone number"/>

            <button
              className="btn-primary md:col-span-4 w-full disabled:opacity-60"
              disabled={isSubmitting}                         // ✅ blocks double clicks
            >
              {isSubmitting ? "Submitting…" : "Book My Free Review"}
            </button>
          </form>

          {status && <div className="mt-3 text-sm text-navy/70">{status}</div>}
        </div>
      </div>
    </section>
  )
}
