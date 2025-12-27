import { SignatureRequestApi } from "@dropbox/sign";

const api = new SignatureRequestApi();
api.username = process.env.DROPBOX_SIGN_API_KEY!;

export default async function handler(req, res) {
  const request = {
    title: "Tax Authorization Form",
    subject: "Please sign",
    message: "Sign securely",
    signers: [{ email_address: req.body.email, name: "Client" }],
    files: ["./public/forms/tax.pdf"]
  };

  const response = await api.signatureRequestSend(request);
  res.json(response);
}




