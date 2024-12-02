import type { NextApiRequest, NextApiResponse } from "next";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

// Define the SendGrid error type
interface SendGridError extends Error {
  response?: {
    body?: {
      errors?: { message: string }[];
    } | string;
  };
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    try {
      // Send the email via SendGrid
      await sendgrid.send({
        to: "es.silver2024@gmail.com",
        from: "eduard.tutunea@gmail.com", // Must match a verified domain in SendGrid
        subject: `New Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });

      return res.status(200).json({ message: "Message sent successfully." });
    } catch (error) {
      const sendGridError = error as SendGridError;

      if (sendGridError.response) {
        const { body } = sendGridError.response;

        // If `body` is an object, check for `errors` property
        if (typeof body === "object" && "errors" in body) {
          console.error("SendGrid error details:", body.errors);
          return res.status(500).json({ error: body.errors });
        }

        // If `body` is a string, return it as a generic error message
        if (typeof body === "string") {
          console.error("SendGrid error response:", body);
          return res.status(500).json({ error: body });
        }
      }

      // Handle generic errors
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Error sending email." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
};

export default handler;
