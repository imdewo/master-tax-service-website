import { sendEmail } from "../../lib/email";
import { logAudit } from "../../lib/audit";

await sendEmail({
  to: customerEmail,
  subject: "Payment Receipt – Master Tax Service",
  html: `<p>Your payment was successful. Thank you.</p>`
});

await logAudit({
  userId: customerEmail,
  action: "PAYMENT_COMPLETED",
  ip: req.socket.remoteAddress
});




