import { useSession } from "next-auth/react";

export default function AdminDashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  if (session?.user?.role !== "admin") {
    return <p>Unauthorized</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <ul className="mt-4 space-y-2">
        <li>📁 Client Documents</li>
        <li>💳 Payments</li>
        <li>🖊️ Signed Forms</li>
        <li>👥 Client Accounts</li>
        <li>📊 Audit Logs</li>
      </ul>
    </div>
  );
}
