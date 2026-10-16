import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName,
      phone,
      email,
      eventType,
      eventDate,
      guests,
      location,
      services,
      message,
    } = body;

    // 1. Validation
    if (!fullName || !phone || !eventType || !message) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }

    // 2. Nodemailer Transporter Configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER, // e.g., platinumeventscaterers@gmail.com
        pass: process.env.SMTP_PASS, // 16-character App Password
      },
    });

    // 3. Email Layout Options
    const mailOptions = {
      from: `"Platinum Events Inquiry" <${process.env.SMTP_USER}>`,
      to: "info@platinumeventscaterers.com",
      replyTo: email || undefined,
      subject: `New Event Inquiry: ${eventType} - ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #0b1d16; color: #ffffff; padding: 30px; border-radius: 10px;">
          <h2 style="color: #d4af37; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">
            New Inquiry from Website
          </h2>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Phone Number:</strong> ${phone}</p>
          <p><strong>Email Address:</strong> ${email || "N/A"}</p>
          <p><strong>Event Type:</strong> ${eventType}</p>
          <p><strong>Event Date:</strong> ${eventDate || "N/A"}</p>
          <p><strong>Number of Guests:</strong> ${guests || "N/A"}</p>
          <p><strong>Event Location:</strong> ${location || "N/A"}</p>
          <p><strong>Services Required:</strong> ${services || "N/A"}</p>
          <hr style="border-color: #d4af37; opacity: 0.3;" />
          <p><strong>Message:</strong></p>
          <p style="background-color: #122c22; padding: 15px; border-radius: 5px; line-height: 1.6;">
            ${message}
          </p>
        </div>
      `,
    };

    // 4. Send Email Execution
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Inquiry submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Nodemailer Email Error:", error);
    return NextResponse.json(
      { error: "Failed to send email inquiry. Check server credentials." },
      { status: 500 }
    );
  }
}