
import Image from "next/image";

export const TrustBadges = () => (
  <section className="bg-white rounded-lg shadow-lg p-6 text-center space-y-4">
    <h2 className="text-2xl font-bold">
      Authorized IRS e-File Provider
    </h2>

    <div className="flex justify-center">
      <Image
        src="/images/irs-efile-authorized.png"
        alt="Authorized IRS e-File Provider"
        width={220}
        height={120}
      />
    </div>

    <p className="text-gray-700 text-sm">
      Master Tax Service, LLC is an IRS-authorized e-file provider,
      ensuring secure, accurate, and compliant electronic filing.
    </p>
  </section>
);
