import { sql } from "@vercel/postgres";

export const logAudit = async ({
  userId,
  action,
  ip
}: {
  userId: string;
  action: string;
  ip?: string;
}) => {
  await sql`
    INSERT INTO audit_logs (user_id, action, ip_address)
    VALUES (${userId}, ${action}, ${ip || "unknown"})
  `;
};

 




