import nodemailer from 'nodemailer'

function formatRow(label, value){
  return `<tr><td style="padding:6px 10px;border:1px solid #e6e9ef"><strong>${label}</strong></td><td style="padding:6px 10px;border:1px solid #e6e9ef">${value || ''}</td></tr>`
}

export default async function handler(req, res){
  if (req.method !== 'POST') return res.status(405).json({error:'Method not allowed'})
  const body = req.body || {}

  // Timestamp in Atlantic/Bermuda time
  const timestamp = new Intl.DateTimeFormat('en-BM', {
    dateStyle: 'medium', timeStyle: 'short', timeZone: 'Atlantic/Bermuda'
  }).format(new Date())

  const {
    SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, LEADS_TO
  } = process.env

  if(!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !LEADS_TO || !SMTP_FROM){
    return res.status(500).json({error:'SMTP env vars missing'})
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 587),
    secure: false,
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  })

  const rows = [
    formatRow('First name', body.firstName),
    formatRow('Last name', body.lastName),
    formatRow('Job title', body.jobTitle),
    formatRow('Business name', body.businessName),
    formatRow('Monthly invoice volume', body.invoiceVolume),
    formatRow('Value of invoices sent monthly', body.invoiceValue),
    formatRow('Email', body.email),
    formatRow('Phone', body.phone),
    formatRow('Timestamp (AST)', timestamp),
    formatRow('UTM Source', body.utm_source),
    formatRow('UTM Medium', body.utm_medium),
    formatRow('UTM Campaign', body.utm_campaign),
    formatRow('UTM Term', body.utm_term),
    formatRow('UTM Content', body.utm_content),
    formatRow('Page URL', body.page_url),
    formatRow('User Agent', req.headers['user-agent']),
  ].join('')

  const html = `
  <div style="font-family:Arial,Helvetica,sans-serif">
    <h2 style="margin:0 0 10px 0;color:#0a2540">New Receiva Lead</h2>
    <table cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:1px solid #e6e9ef">${rows}</table>
  </div>`

  try{
    await transporter.sendMail({
      from: SMTP_FROM,
      to: LEADS_TO,
      subject: `New Receiva Lead — ${body.businessName || ''}`,
      html
    })
    res.status(200).json({ok:true})
  }catch(err){
    console.error('SMTP send error', err)
    res.status(500).json({error:'Email failed'})
  }
}
