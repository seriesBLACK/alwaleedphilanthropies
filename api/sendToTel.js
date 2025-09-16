import formidable from 'formidable';
import fs from "fs";
import FormData from "form-data";
import fetch from "node-fetch";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const form = formidable({
      maxFileSize: 5 * 1024 * 1024, // 5MB
      multiples: false,
    });

    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve([fields, files]);
      });
    });

    const requestId = fields.requestId;
    const file = files.file?.[0];


    const caption = `
📌 رقم الطلب: ${requestId}
نوع الطلب: ${fields.type}
👤 الاسم: ${fields.name}
📧 البريد الإلكتروني: ${fields.email}
📞 الهاتف: ${fields.phone}
🏠 العنوان: ${fields.address}
🌍 الجنسية: ${fields.nationality}
🏦 البنك: ${fields.bankName}
💳 رقم الحساب البنكي: ${fields.bankNum}
🆔 رقم الهوية: ${fields.idNum}
📝 الشرح: ${fields.explain}
    `;


    const formData = new FormData();
    formData.append("chat_id", process.env.CHAT_ID);
    formData.append("caption", caption);
    formData.append("photo", fs.createReadStream(file.filepath));


    const telegramRes = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendPhoto`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await telegramRes.json();
    return res.status(200).json({ success: true, data });
  } catch (err) {
    console.error("Error sending to Telegram:", err);
    return res.status(500).json({ error: "Failed to send", details: err.message });
  }
}
