import { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { to, message } = req.body;

  await client.messages.create({
    body: message,
    from: process.env.TWILIO_PHONE,
    to,
  });

  res.status(200).json({ success: true });
}


