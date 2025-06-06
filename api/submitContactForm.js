import nodemailer from 'nodemailer'

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Methode nicht erlaubt' })
  }

  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Erforderliche Felder fehlen' })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.MAIL_TO,
    subject: 'Neue Kontaktformular-Einsendung',
    text: `Name: ${name}\nE-Mail: ${email}\nNachricht: ${message}`,
  }

  try {
    await transporter.sendMail(mailOptions)
    return res.status(200).json({ message: 'Formular erfolgreich übermittelt' })
  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error)
    return res.status(500).json({ error: 'Interner Serverfehler' })
  }
}
