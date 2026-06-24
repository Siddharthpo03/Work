"use server";

import nodemailer from "nodemailer";

export type ContactFormState = {
  success: boolean;
  message: string;
};

const initialState: ContactFormState = {
  success: false,
  message: "",
};

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

export async function sendInquiry(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  try {
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const projectType = String(formData.get("projectType") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !projectType || !message) {
      return {
        success: false,
        message: "Please fill in every field before sending.",
      };
    }

    const transporter = nodemailer.createTransport({
      host: getRequiredEnv("SMTP_HOST"),
      port: Number(getRequiredEnv("SMTP_PORT")),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: getRequiredEnv("SMTP_USER"),
        pass: getRequiredEnv("SMTP_PASS"),
      },
    });

    const fromAddress =
      process.env.CONTACT_FROM_EMAIL ?? getRequiredEnv("SMTP_USER");
    const toAddress = process.env.CONTACT_TO_EMAIL ?? fromAddress;

    await transporter.sendMail({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject: `Portfolio inquiry from ${name} - ${projectType}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project Type: ${projectType}`,
        "",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
          <h2 style="margin: 0 0 16px;">New portfolio inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return {
      success: true,
      message: "Your message was sent successfully. I will reply soon.",
    };
  } catch {
    return {
      success: false,
      message:
        "Email sending is not configured yet. Add SMTP environment variables and try again.",
    };
  }
}
