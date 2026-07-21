import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/api/*', async (c, next) => {
  const origins = c.env.FRONTEND_URL
    ? c.env.FRONTEND_URL.split(',').map((o) => o.trim())
    : ['http://localhost:5173']
  return cors({
    origin: origins,
    allowMethods: ['POST', 'OPTIONS'],
    allowHeaders: ['Content-Type'],
  })(c, next)
})

// ── Helpers ──────────────────────────────────────────────────────────────────

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function row(label, value) {
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #F3F4F6;color:#9CA3AF;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;width:110px;vertical-align:top;padding-right:16px;">${label}</td>
      <td style="padding:10px 0;border-bottom:1px solid #F3F4F6;color:#111827;font-size:14px;">${value}</td>
    </tr>`
}

function notifHtml({ nom, entreprise, email, telephone, besoin }) {
  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>Nouveau contact — DJEXA</title></head>
<body style="margin:0;padding:0;background:#F1F5F9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0">
<tr><td align="center" style="padding:40px 16px;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
  <tr><td style="background:#111827;padding:28px 32px;">
    <div style="font-weight:800;font-size:20px;letter-spacing:-0.03em;color:#FFFFFF;">DJEXA<span style="color:#2563EB;">.</span></div>
    <div style="font-size:13px;color:rgba(255,255,255,0.45);margin-top:4px;">Nouveau message de contact</div>
  </td></tr>
  <tr><td style="background:#FFFFFF;padding:32px;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
      ${row('Nom', esc(nom))}
      ${row('Entreprise', esc(entreprise) || '—')}
      ${row('Email', `<a href="mailto:${esc(email)}" style="color:#2563EB;text-decoration:none;">${esc(email)}</a>`)}
      ${row('Téléphone', esc(telephone) || '—')}
    </table>
    <div style="margin-top:24px;background:#F8FAFC;border-radius:10px;padding:16px 20px;border:1px solid #E5E7EB;">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#9CA3AF;margin-bottom:10px;">Message</div>
      <div style="font-size:14px;color:#374151;line-height:1.7;white-space:pre-wrap;">${esc(besoin)}</div>
    </div>
    <div style="margin-top:28px;">
      <a href="mailto:${esc(email)}?subject=Re%3A+votre+projet" style="display:inline-block;background:#2563EB;color:#FFFFFF;font-size:13px;font-weight:600;padding:11px 22px;border-radius:8px;text-decoration:none;">Répondre →</a>
    </div>
  </td></tr>
  <tr><td style="background:#F8FAFC;padding:16px 32px;border-top:1px solid #E5E7EB;">
    <p style="margin:0;font-size:12px;color:#9CA3AF;">Envoyé depuis le formulaire de <a href="https://djexa.fr" style="color:#2563EB;text-decoration:none;">djexa.fr</a></p>
  </td></tr>
</table>
</td></tr>
</table>
</body>
</html>`
}

function confirmHtml({ nom }) {
  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>Message reçu — DJEXA</title></head>
<body style="margin:0;padding:0;background:#F1F5F9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0">
<tr><td align="center" style="padding:40px 16px;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
  <tr><td style="background:#111827;padding:28px 32px;">
    <div style="font-weight:800;font-size:20px;letter-spacing:-0.03em;color:#FFFFFF;">DJEXA<span style="color:#2563EB;">.</span></div>
  </td></tr>
  <tr><td style="background:#FFFFFF;padding:40px 32px;text-align:center;">
    <div style="width:56px;height:56px;background:#ECFDF5;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;margin-bottom:20px;">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 13l4 4L19 7" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <h1 style="margin:0 0 12px;font-size:22px;font-weight:800;color:#111827;letter-spacing:-0.03em;">Bonjour ${esc(nom)},</h1>
    <p style="margin:0 0 8px;font-size:15px;color:#374151;line-height:1.65;">Votre message a bien été reçu.</p>
    <p style="margin:0 0 24px;font-size:15px;color:#374151;line-height:1.65;">Nous vous répondrons sous <strong style="color:#111827;">48 heures ouvrées</strong>.</p>
    <div style="background:#F8FAFC;border-radius:10px;padding:16px 20px;margin-bottom:28px;border:1px solid #E5E7EB;text-align:left;">
      <p style="margin:0;font-size:13px;color:#6B7280;line-height:1.6;">En attendant, découvrez nos <a href="https://djexa.fr/#realisations" style="color:#2563EB;text-decoration:none;font-weight:500;">réalisations</a> et <a href="https://djexa.fr/#methode" style="color:#2563EB;text-decoration:none;font-weight:500;">notre méthode de travail</a>.</p>
    </div>
    <a href="https://djexa.fr" style="display:inline-block;background:#111827;color:#FFFFFF;font-size:13px;font-weight:600;padding:12px 24px;border-radius:8px;text-decoration:none;">Retour au site →</a>
  </td></tr>
  <tr><td style="background:#F8FAFC;padding:16px 32px;border-top:1px solid #E5E7EB;text-align:center;">
    <p style="margin:0;font-size:12px;color:#9CA3AF;">DJEXA — Studio logiciel sur mesure · <a href="https://djexa.fr" style="color:#2563EB;text-decoration:none;">djexa.fr</a></p>
  </td></tr>
</table>
</td></tr>
</table>
</body>
</html>`
}

async function sendEmail(apiKey, { from, to, replyTo, subject, html }) {
  const payload = { from, to, subject, html }
  if (replyTo) payload.reply_to = replyTo
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`)
}

// ── Routes ────────────────────────────────────────────────────────────────────

app.post('/api/contact', async (c) => {
  let body
  try {
    body = await c.req.json()
  } catch {
    return c.json({ error: 'Corps JSON invalide' }, 400)
  }

  const { nom, email, entreprise = '', telephone = '', besoin } = body

  if (!nom?.trim() || !besoin?.trim()) {
    return c.json({ error: 'Champs requis manquants' }, 400)
  }
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return c.json({ error: 'Adresse email invalide' }, 400)
  }

  const apiKey = c.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY manquante')
    return c.json({ error: 'Configuration serveur manquante' }, 500)
  }

  try {
    await Promise.all([
      sendEmail(apiKey, {
        from: 'DJEXA <noreply@djexa.fr>',
        to: 'contact@djexa.fr',
        replyTo: email.trim(),
        subject: `Nouveau contact : ${nom.trim()}${entreprise ? ` — ${entreprise}` : ''}`,
        html: notifHtml({ nom: nom.trim(), entreprise, email: email.trim(), telephone, besoin: besoin.trim() }),
      }),
      sendEmail(apiKey, {
        from: 'DJEXA <noreply@djexa.fr>',
        to: email.trim(),
        subject: 'Votre message a bien été reçu — DJEXA',
        html: confirmHtml({ nom: nom.trim() }),
      }),
    ])
  } catch (err) {
    console.error('Erreur envoi email :', err.message)
    return c.json({ error: "Erreur lors de l'envoi des emails" }, 500)
  }

  return c.json({ ok: true })
})

export default app
