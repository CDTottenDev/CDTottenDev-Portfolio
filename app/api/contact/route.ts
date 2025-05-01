import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { type NextRequest } from 'next/server';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Validate environment variables at startup
const requiredEnvVars = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_LOGIN',
  'SMTP_PASSWORD',
  'SMTP_FROM_NAME'
] as const;

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}

// Create reusable transporter object using environment variables
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: false, // TLS required
    auth: {
      user: process.env.SMTP_LOGIN,
      pass: process.env.SMTP_PASSWORD
    },
    // Additional security options
    tls: {
      // Reject unauthorized connections
      rejectUnauthorized: true,
      // Minimum TLS version
      minVersion: 'TLSv1.2'
    }
  });
};

export async function POST(req: NextRequest) {
  // Rate limiting headers (to be implemented with a proper rate limiting solution)
  const response = new NextResponse();
  response.headers.set('X-RateLimit-Limit', '100');
  response.headers.set('X-RateLimit-Remaining', '99');

  try {
    // Validate request method
    if (req.method !== 'POST') {
      return NextResponse.json(
        { error: 'Method not allowed' },
        { status: 405 }
      );
    }

    const data = await req.json() as ContactForm;
    const { name, email, subject, message } = data;

    // Input validation
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'All fields are required and cannot be empty' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Sanitize inputs (basic example - consider using a library like DOMPurify for production)
    const sanitizeInput = (input: string) => {
      return input
        .replace(/[<>]/g, '') // Remove < and >
        .trim();
    };

    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      subject: sanitizeInput(subject),
      message: sanitizeInput(message)
    };

    const transporter = createTransporter();

    const mailOptions = {
      from: {
        name: process.env.SMTP_FROM_NAME,
        address: process.env.SMTP_LOGIN
      },
      to: process.env.SMTP_LOGIN,
      replyTo: {
        name: sanitizedData.name,
        address: sanitizedData.email
      },
      subject: `Website Contact: ${sanitizedData.subject}`,
      text: `
Name: ${sanitizedData.name}
Email: ${sanitizedData.email}
Subject: ${sanitizedData.subject}
Message: ${sanitizedData.message}
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${sanitizedData.name}</p>
          <p><strong>Email:</strong> ${sanitizedData.email}</p>
          <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
          <p><strong>Message:</strong></p>
          <div style="padding: 15px; background: #f5f5f5; border-radius: 5px;">
            ${sanitizedData.message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `.trim()
    };

    try {
      // Verify SMTP connection before sending
      await transporter.verify();
      const info = await transporter.sendMail(mailOptions);
      console.log('Message sent: %s', info.messageId);

      return NextResponse.json(
        { message: 'Email sent successfully', id: info.messageId },
        { 
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store, no-cache, must-revalidate'
          }
        }
      );
    } catch (error) {
      console.error('SMTP Error Details:', {
        message: error instanceof Error ? error.message : String(error),
        code: error instanceof Error && 'code' in error ? (error as any).code : undefined,
        command: error instanceof Error && 'command' in error ? (error as any).command : undefined,
        response: error instanceof Error && 'response' in error ? (error as any).response : undefined,
      });
      
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
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
