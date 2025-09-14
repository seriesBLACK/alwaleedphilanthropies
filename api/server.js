import multer from "multer";
import fs from "fs";
import FormData from "form-data";
import fetch from "node-fetch";
// Configure multer to store files in /tmp (Vercel allows temporary storage there)
const upload = multer({ dest: "/tmp" });

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}

module.exports.config = {
  api: {
    bodyParser: false,
  },
};

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    await runMiddleware(req, res, upload.single("file"));

    const { name, email, message } = req.body;
    const file = req.file;

    const caption = `📩 New Submission:\n\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message: ${message}`;

    const formData = new FormData();
    formData.append("chat_id", process.env.CHAT_ID);
    formData.append("caption", caption);

    if (file) {
      formData.append("photo", fs.createReadStream(file.path));
    }

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendPhoto`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await telegramRes.json();

    if (file) fs.unlinkSync(file.path);

    return res.status(200).json({ success: true, data });
  } catch (err) {
    console.error("Error sending to Telegram:", err);
    return res.status(500).json({ error: "Failed to send", details: err.message });
  }
};
