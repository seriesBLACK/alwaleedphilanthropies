// import express from 'express';
// import cors from 'cors';
import multer from "multer";
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import fs from "fs";
import FormData from "form-data";
import WelcomeEmail from "../emails/WelcomeEmail";


dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

const PORT = 3000;
const RESEND_API_KEY = process.env.RESEND_API_KEY;

const BOT_TOKEN = process.env.BOT_TOKEN
const CHAT_ID = "6254739128"

const upload = multer({ dest: "/tmp" }); // Vercel allows tmp storage

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}

export const config = {
  api: {
    bodyParser: false, // Required for multer
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    await runMiddleware(req, res, upload.single("file"));

    const { name, email } = req.body;
    if (!email) return res.status(400).json({ success: false, error: 'missing email' });

    const { body, file } = req;

    // Create caption text from form data
    const caption = Object.entries(body)
      .map(([k, v]) => `*${k}:* ${v}`)
      .join("\n");

    // Prepare Telegram form with image + caption
    const tgForm = new FormData();
    tgForm.append("chat_id", CHAT_ID);
    tgForm.append("caption", caption);
    tgForm.append("parse_mode", "Markdown"); // to keep bold keys

    if (file) {
      tgForm.append("photo", fs.createReadStream(file.path));
    }

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, {
      method: "POST",
      body: tgForm,
      headers: tgForm.getHeaders(), // 
    });

    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Alwaledd <charity@alwaleedorganization.com>',
        to: [email],
        subject: 'تم استلام طلبك بنجاح',
        html: <WelcomeEmail name={name} />,
      }),
    });

    res.json({ success: true, message: "Data sent to Telegram" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

// app.listen(PORT, () => {
//   console.log(`Dev API server listening on http://localhost:${PORT}`);
// });
