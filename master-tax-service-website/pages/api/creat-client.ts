import fetch from "node-fetch";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { clientEmail } = req.body;

  await fetch("https://api.dropboxapi.com/2/files/create_folder_v2", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.DROPBOX_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      path: `/clients/${clientEmail}`,
      autorename: false,
    }),
  });

  res.status(200).json({ success: true });
}



