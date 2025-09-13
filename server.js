import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;
const RESEND_API_KEY = process.env.RESEND_API_KEY;

const BOT_TOKEN = '7243210869:AAGTpQdisHCmBeJkzyTtyqaWciw_VL_EoUw'
const CHAT_ID = "chat_id.txt"

app.post('/api/send-email', async (req, res) => {
  try {
    const formData = new FormData();
    const { name, email } = req.body;

    formData.append("chat_id", CHAT_ID);
    formData.append("photo", fs.createReadStream(req.file.path));

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, {
      method: "POST",
      body: formData,
    });
    if (!email) return res.status(400).json({ success: false, error: 'missing email' });

    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'alkhyrytm108@gmail.com',
        to: [email],
        subject: 'تم استلام طلبك بنجاح',
        html: `<strong>مرحبا ${name}</strong><br/>شكرا لتقديم طلبك. سيتم مراجعته قريبا.`,
      }),
    });

    const data = await r.json();
    if (!r.ok) return res.status(r.status).json({ success: false, error: data });
    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Dev API server listening on http://localhost:${PORT}`);
});
