import type { NextApiRequest, NextApiResponse } from "next";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    try {
      await sendgrid.send({
        to: "es.silver2024@gmail.com",
        from: "eduard.tutunea@gmail.com", // Must match a verified domain in SendGrid
        subject: `New Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });

      return res.status(200).json({ message: "Message sent successfully." });
    } catch (error: unknown) {
      if (
        error &&
        typeof error === "object" &&
        "response" in error &&
        error.response &&
        typeof error.response === "object" &&
        "body" in error.response
      ) {
        console.error("SendGrid error response:", (error.response as any).body);
        return res.status(500).json({ error: (error.response as any).body });
      } else {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: "Error sending email." });
      }
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
};

export default handler;
