import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  try {
    const { name, email, subject, message } = await req.json();

    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

    // Configure the SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email app password
      },
    });

    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Your email
      to: 'sales@sebwholesaledistributorsinc.com',
      subject: `Contact Form Submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email, // User's email address
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Error sending email' });
  }
};
