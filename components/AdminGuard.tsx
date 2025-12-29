 "use client";

export const AdminGuard = ({
  role,
  children,
}: {
  role: string;
  children: React.ReactNode;
}) => {
  if (role !== "owner") {
    return <p>Access denied</p>;
  }
  return <>{children}</>;
};



