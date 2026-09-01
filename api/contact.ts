import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Always set JSON content-type and CORS headers
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).json({ success: true });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({
          success: false,
          message: 'Invalid request body'
        });
      }
    }

    if (!body || typeof body !== 'object') {
      return res.status(400).json({
        success: false,
        message: 'Invalid request body'
      });
    }

    const { name, email, subject, message } = body;

    // Field validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Name is required.'
      });
    }

    if (!email || typeof email !== 'string' || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Email is required.'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    if (!subject || typeof subject !== 'string' || !subject.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Subject is required.'
      });
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Message cannot be empty.'
      });
    }

    // Check environment variables inside handler (prevents module crash if env var is missing)
    const apiKey = process.env.EMAIL_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL || 'aribtayab@gmail.com';

    if (!apiKey) {
      console.error('Server Configuration Error: EMAIL_API_KEY environment variable is not configured.');
      return res.status(500).json({
        success: false,
        message: 'Email service is temporarily unavailable.'
      });
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: toEmail,
      replyTo: email.trim(),
      subject: `[Portfolio Contact] ${subject.trim()}`,
      text: `New message from your portfolio website\n\nName: ${name.trim()}\nEmail: ${email.trim()}\nSubject: ${subject.trim()}\n\nMessage:\n${message.trim()}`,
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(500).json({
        success: false,
        message: 'Unable to send your message right now. Please try again later.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully!'
    });
  } catch (error) {
    console.error('Unhandled server error in contact API:', error);
    return res.status(500).json({
      success: false,
      message: 'Unable to send your message right now. Please try again later.'
    });
  }
}
