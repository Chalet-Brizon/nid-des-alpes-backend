require("dotenv").config();
const { sendEmail } = require("./sendEmail.js");

sendEmail({
  to: process.env.OWNER_EMAIL,
  subject: "Test email – Le Nid des Alpes",
  text: "Ceci est un test d'envoi d'email depuis votre serveur."
});
