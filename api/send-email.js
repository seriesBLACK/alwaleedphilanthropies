const RESEND_API_KEY = process.env.RESEND_API_KEY;

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email } = body;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Alwaleed <charity@alwaleedorganization.com>',
        to: [email],
        subject: 'تم استلام طلبك بنجاح',
        html: `<strong>مرحباً ${name}</strong><br/>شكراً لتقديم طلبك. سيتم مراجعته قريباً.`,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      return new Response(JSON.stringify({ success: true, data }), { status: 200 });
    } else {
      const error = await res.json();
      return new Response(JSON.stringify({ success: false, error }), { status: res.status });
    }
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}

// await fetch('https://api.resend.com/emails', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${RESEND_API_KEY}`,
//   },
//   body: JSON.stringify({
//     from: 'Alwaledd <charity@alwaleedorganization.com>',
//     to: [email],
//     subject: 'تم استلام طلبك بنجاح',
//     html: <WelcomeEmail name={name} />,
//   }),
// });
// Create caption text from form data
const caption = Object.entries(body)
  .map(([k, v]) => `*${k}:* ${v}`)
  .join("\n");