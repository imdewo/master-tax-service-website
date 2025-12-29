
import Image from "next/image";

export const Footer = () => (
  <footer className="bg-gray-900 text-white p-6 mt-12">
    <div className="flex flex-col items-center space-y-3">
      <Image
        src="/images/logo-master-tax.png"
        alt="Master Tax Service Logo"
        width={260}
        height={80}
      />
      <p className="text-sm">
        © {new Date().getFullYear()} Master Tax Service, LLC
      </p>
    </div>
  </footer>
);

