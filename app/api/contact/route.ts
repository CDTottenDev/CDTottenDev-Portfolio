import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { type NextRequest } from 'next/server';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: NextRequest) {
  if (!process.env.ZOHO_EMAIL || !process.env.ZOHO_APP_PASSWORD) {
    console.error('Missing email configuration');
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  try {
    const data = await req.json() as ContactForm;
    const { name, email, subject, message } = data;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_APP_PASSWORD,
      }
    });

    const mailOptions = {
      from: {
        name: 'Website Contact Form',
        address: process.env.ZOHO_EMAIL
      },
      to: process.env.ZOHO_EMAIL,
      replyTo: {
        name: name,
        address: email
      },
      subject: `Website Contact: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div style="padding: 15px; background: #f5f5f5; border-radius: 5px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `.trim()
    };

    try {
      await transporter.verify();
      const info = await transporter.sendMail(mailOptions);
      console.log('Message sent: %s', info.messageId);

      return NextResponse.json(
        { message: 'Email sent successfully', id: info.messageId },
        { status: 200 }
      );
    } catch (error) {
      // More detailed error logging
      console.error('SMTP Error Details:', {
        message: error instanceof Error ? error.message : String(error),
        code: error instanceof Error && 'code' in error ? (error as any).code : undefined,
        command: error instanceof Error && 'command' in error ? (error as any).command : undefined,
        response: error instanceof Error && 'response' in error ? (error as any).response : undefined,
      });
      
      return NextResponse.json(
        { 
          error: 'Failed to send email. Please try again later.',
          details: error instanceof Error ? error.message : String(error)  // Only in development
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Request Error:', error);
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}
