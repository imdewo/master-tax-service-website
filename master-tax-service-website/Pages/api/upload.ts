import { sendEmail } from "../../lib/email";
import { logAudit } from "../../lib/audit";

await sendEmail({
  to: "info@mastertaxservice.com",
  subject: "New Document Uploaded",
  html: `<p>A client uploaded tax documents.</p>`
});

await logAudit({
  userId: "client",
  action: "DOCUMENT_UPLOAD",
  ip: req.socket.remoteAddress
});

 




