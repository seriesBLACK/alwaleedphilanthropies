import { Resend } from 'resend';
import React from 'react';
import { render } from '@react-email/render';
import WelcomeEmail from '../emails/WelcomeEmail.jsx';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email } = req.body;
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const emailHtml = render(React.createElement(WelcomeEmail, { name }));

    const data = await resend.emails.send({
      from: 'alkhyrytm108@gmail.com',
      to: email,
      subject: 'Welcome!',
      html: emailHtml
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
