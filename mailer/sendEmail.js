import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url"; // Nécessaire pour __dirname en ESM

// Configuration pour __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function sendEmail({ to, subject, text, html }) {
  try {
    // Transporter Gmail sécurisé
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
        ciphers: "SSLv3"
      }
    });

    // Envoi email
    await transporter.sendMail({
      from: `"Le Nid des Alpes" <${process.env.GMAIL_USER}>`,
      to,
      subject,
      text,
      html,
      attachments: [
        {
          filename: "logo.png",
          // Correction du chemin vers le logo
          path: path.join(process.cwd(), "public", "logo.png"),
          cid: "logo_nid_des_alpes"
        }
      ]
    });

    console.log("📨 Email envoyé à :", to);

  } catch (error) {
    console.error("❌ Erreur lors de l'envoi de l'email :", error);
  }
}