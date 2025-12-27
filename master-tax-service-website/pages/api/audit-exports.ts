import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
  const logs = await sql`SELECT * FROM audit_logs`;

  const csv = [
    "User,Action,IP,Date",
    ...logs.rows.map(
      l => `${l.user_id},${l.action},${l.ip_address},${l.created_at}`
    )
  ].join("\n");

  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", "attachment; filename=audit_logs.csv");
  res.send(csv);
}


