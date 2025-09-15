
const RESEND_API_KEY = process.env.RESEND_API_KEY;
// api/sendEmail.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name } = req.body;

    if (!email || !name) {
      return res.status(400).json({ error: 'Missing email or name' });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Alwaleed <charity@alwaleedorganization.com>',
        to: [email],
        subject: 'تم استلام طلبك بنجاح',
        html: `<strong>مرحباً ${name}</strong><br/>شكراً لتقديم طلبك. سيتم مراجعته قريباً.`
      }),
    });

    const data = await response.json();
    res.status(response.status).json(data);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
