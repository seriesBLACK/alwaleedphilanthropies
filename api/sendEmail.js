
const RESEND_API_KEY = process.env.RESEND_API_KEY;
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name, requestId } = req.body;

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
        html:
          `<table width="100%" cellpadding="0" cellspacing="0" border="0"
  style="background:#013a19; padding:20px 0; min-height: 100vh;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" border="0"
        style="background:#013a19; border:1px solid #ddd; border-radius:8px; overflow:hidden; min-height: 80vh;">

        <!-- Header -->
        <tr>
          <td align="center" bgcolor="#013a19"
            style="color:#f7e3e3; font-family:Arial, sans-serif; font-size:25px; padding:15px;">
            تم استلام طلبك بنجاح

            <p style="margin:0 0 15px 0;">🔑 رقم الطلب هو: <strong>${requestId}</strong></p>

          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td
            style="padding:20px; font-family:Arial, sans-serif; font-size:21px; color:#ddd; text-align: center; line-height:1.6;">
            <p style="margin:0 0 15px 0;"><strong>مرحباً ${name},</strong></p>
            <p style="margin:0 0 15px 0;">شكراً لتقديم طلبك. سيتم مراجعته قريباً من قبل فريقنا.</p>
            <p style="margin:0;">إذا كان لديك أي استفسارات، يمكنك الرد على هذا البريد.</p>
            <p style="margin:0;">قم بمتابعة حالة الطلب على مكتبنا الخاص هلى منصة الواتس اب</p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td align="center" bgcolor="#013a19"
            style="font-family:Arial, sans-serif; font-size:12px; color:#ddd; padding:15px;">
            <p style="margin:0;">
              📧 <a href="mailto:alkhyrytm108@gmail.com" style="color:#b3aeae; text-decoration:none;">تواصل عبر
                Gmail</a> &nbsp; | &nbsp;
              💬 <a href="https://wa.me/966590858707" style="color:#4aa26a; text-decoration:none;">تواصل عبر
                WhatsApp</a>
            </p>
            <p style="margin:10px 0 0 0;">© 2025 Alwaleed Organization</p>

          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>`
      }),
    });

    const data = await response.json();
    res.status(response.status).json(data);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
