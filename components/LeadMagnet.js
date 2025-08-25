import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"

function getUTMs() {
  if (typeof window === "undefined") return {}
  const params = new URLSearchParams(window.location.search)
  const fields = ["utm_source","utm_medium","utm_campaign","utm_term","utm_content"]
  const out = {}
  fields.forEach(f => { const v = params.get(f); if (v) out[f] = v })
  out.page_url = window.location.href
  return out
}

const LABELS = {
  firstName: "First name",
  lastName: "Last name",
  jobTitle: "Job title",
  businessName: "Business name",
  invoiceVolume: "Monthly invoice volume",
  invoiceValue: "Value of invoices sent monthly",
  email: "Email",
  phone: "Phone number",
}

export default function LeadMagnet(){
  const [status, setStatus] = useState("")
  const [utms, setUtms] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})   // { field: "message" }
  const formRef = useRef(null)
  const router = useRouter()

  useEffect(() => { setUtms(getUTMs()) }, [])

  // ------- Custom validation that returns an errors object -------
  function validateAll(form) {
    const get = name => (form.get(name) ?? "").toString().trim()
    const errs = {}

    if (!get("firstName")) errs.firstName = "Please enter your first name."
    if (!get("lastName")) errs.lastName = "Please enter your last name."
    if (!get("jobTitle")) errs.jobTitle = "Please enter your job title."
    if (!get("businessName")) errs.businessName = "Please enter your business name."

    if (!get("invoiceVolume")) errs.invoiceVolume = "Choose a monthly invoice volume."
    if (!get("invoiceValue")) errs.invoiceValue = "Choose a monthly invoice value."

    const email = get("email")
    if (!email) errs.email = "Please enter your email."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Enter a valid email."

    const phone = get("phone")
    if (!phone) errs.phone = "Please enter your phone number."
    else if (!/^[0-9+().\-\s]{7,}$/.test(phone)) errs.phone = "Enter a valid phone number."

    return errs
  }

  function focusFirstInvalid(errs){
    const firstKey = Object.keys(errs)[0]
    if (!firstKey) return
    const el = formRef.current?.querySelector(`[name="${firstKey}"]`)
    el?.focus({ preventScroll: false })
  }

  async function handleSubmit(e){
    e.preventDefault()
    setStatus("")

    const rawForm = new FormData(formRef.current)
    const errs = validateAll(rawForm)

    if (Object.keys(errs).length){
      setErrors(errs)
      focusFirstInvalid(errs)
      return
    }

    if (isSubmitting) return
    setIsSubmitting(true)

    try {
      // Build payload from trimmed values + UTM fields
      const entries = Array.from(rawForm.entries()).map(([k, v]) => [k, typeof v === "string" ? v.trim() : v])
      const data = Object.fromEntries(entries)
      Object.entries(utms).forEach(([k, v]) => { if (v != null) data[k] = String(v) })

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      if (!res.ok) throw new Error("Submit failed")

      formRef.current.reset()
      router.push("/thankyou")
    } catch (err){
      console.error(err)
      setStatus("Something went wrong. Please try again.")
      setIsSubmitting(false)
    }
  }

  // clear a field's error on change/blur
  function clearError(name){
    if (!errors[name]) return
    setErrors(prev => {
      const next = { ...prev }
      delete next[name]
      return next
    })
  }

  // helper to style invalid fields
  const invalidClass = "border-red-500 ring-1 ring-red-500"

  return (
    <section id="lead" className="bg-white">
      <div className="section py-16 md:py-24">
        <div className="rounded-2xl bg-teal/5 border border-teal/20 p-8 md:p-12 shadow-card">
          <h2>See How Much Faster You Could Get Paid</h2>
          <p className="mt-3 text-navy/80">
            Book your free, no-obligation receivables review today and discover how our active management can improve cash flow and reveal growth opportunities.
          </p>

          {/* noValidate prevents native "one-by-one" bubbles */}
          <form ref={formRef} noValidate onSubmit={handleSubmit} className="mt-6 grid md:grid-cols-4 gap-4">
            <div className="md:col-span-4">
              {!!Object.keys(errors).length && (
                <div className="mb-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                  <div className="font-medium mb-1">Please fix the fields below:</div>
                  <ul className="list-disc pl-5">
                    {Object.keys(errors).map(key => (
                      <li key={key}><button type="button" className="underline" onClick={()=>{
                        const el = formRef.current?.querySelector(`[name="${key}"]`)
                        el?.focus({ preventScroll: false })
                      }}>{LABELS[key]}</button>: {errors[key]}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div>
              <input
                name="firstName"
                placeholder="First name"
                autoComplete="given-name"
                className={`rounded-2xl border border-navy/10 px-4 py-3 w-full ${errors.firstName ? invalidClass : ""}`}
                onChange={() => clearError("firstName")}
                onBlur={() => clearError("firstName")}
              />
              {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
            </div>

            <div>
              <input
                name="lastName"
                placeholder="Last name"
                autoComplete="family-name"
                className={`rounded-2xl border border-navy/10 px-4 py-3 w-full ${errors.lastName ? invalidClass : ""}`}
                onChange={() => clearError("lastName")}
                onBlur={() => clearError("lastName")}
              />
              {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
            </div>

            <div>
              <input
                name="jobTitle"
                placeholder="Job title"
                autoComplete="organization-title"
                className={`rounded-2xl border border-navy/10 px-4 py-3 w-full ${errors.jobTitle ? invalidClass : ""}`}
                onChange={() => clearError("jobTitle")}
                onBlur={() => clearError("jobTitle")}
              />
              {errors.jobTitle && <p className="mt-1 text-xs text-red-600">{errors.jobTitle}</p>}
            </div>

            <div>
              <input
                name="businessName"
                placeholder="Business name"
                autoComplete="organization"
                className={`rounded-2xl border border-navy/10 px-4 py-3 w-full ${errors.businessName ? invalidClass : ""}`}
                onChange={() => clearError("businessName")}
                onBlur={() => clearError("businessName")}
              />
              {errors.businessName && <p className="mt-1 text-xs text-red-600">{errors.businessName}</p>}
            </div>

            <div>
              <select
                name="invoiceVolume"
                defaultValue=""
                className={`rounded-2xl border border-navy/10 px-4 py-3 w-full ${errors.invoiceVolume ? invalidClass : ""}`}
                onChange={() => clearError("invoiceVolume")}
                onBlur={() => clearError("invoiceVolume")}
              >
                <option value="" disabled>Monthly invoice volume</option>
                <option>Less than 20</option>
                <option>20 – 50</option>
                <option>50 – 100</option>
                <option>100 – 200</option>
                <option>200 – 300</option>
                <option>300+</option>
              </select>
              {errors.invoiceVolume && <p className="mt-1 text-xs text-red-600">{errors.invoiceVolume}</p>}
            </div>

            <div>
              <select
                name="invoiceValue"
                defaultValue=""
                className={`rounded-2xl border border-navy/10 px-4 py-3 w-full ${errors.invoiceValue ? invalidClass : ""}`}
                onChange={() => clearError("invoiceValue")}
                onBlur={() => clearError("invoiceValue")}
              >
                <option value="" disabled>Value of invoices sent monthly</option>
                <option>Less than $20k</option>
                <option>$20k – $50k</option>
                <option>$50k – $100k</option>
                <option>$100k+</option>
              </select>
              {errors.invoiceValue && <p className="mt-1 text-xs text-red-600">{errors.invoiceValue}</p>}
            </div>

            <div>
              <input
                name="email"
                placeholder="Email"
                autoComplete="email"
                inputMode="email"
                className={`rounded-2xl border border-navy/10 px-4 py-3 w-full ${errors.email ? invalidClass : ""}`}
                onChange={() => clearError("email")}
                onBlur={() => clearError("email")}
              />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>

            <div>
              <input
                name="phone"
                placeholder="Phone number"
                autoComplete="tel"
                inputMode="tel"
                className={`rounded-2xl border border-navy/10 px-4 py-3 w-full ${errors.phone ? invalidClass : ""}`}
                onChange={() => clearError("phone")}
                onBlur={() => clearError("phone")}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
            </div>

            <button
              className="btn-primary md:col-span-4 w-full disabled:opacity-60"
              disabled={isSubmitting}
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
