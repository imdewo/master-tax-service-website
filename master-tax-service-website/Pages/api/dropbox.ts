import type { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import fs from "fs";
import fetch from "node-fetch";

export const config = { api: { bodyParser: false } };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const form = new formidable.IncomingForm();

  form.parse(req, async (_, __, files: any) => {
    const file = files.file;
    const content = fs.readFileSync(file.filepath);

    await fetch("https://content.dropboxapi.com/2/files/upload", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.DROPBOX_ACCESS_TOKEN}`,
        "Dropbox-API-Arg": JSON.stringify({
          path: `/${file.originalFilename}`,
          mode: "add",
          autorename: true
        }),
        "Content-Type": "application/octet-stream"
      },
      body: content
    });

    res.status(200).json({ success: true });
  });
}



