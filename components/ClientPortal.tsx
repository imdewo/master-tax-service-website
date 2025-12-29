"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export const ClientPortal = () => {
  const { data } = useSession();

  if (!data)
    return (
      <button
        onClick={() => signIn()}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Client Login
      </button>
    );

  return (
    <div className="bg-white p-6 rounded shadow">
      <p>Welcome, {data.user?.email}</p>
      <button onClick={() => signOut()} className="mt-2 underline">
        Logout
      </button>
    </div>
  );
};


