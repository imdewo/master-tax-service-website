import Hero3D from "../components/Hero3D";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { OfficeHours } from "../components/OfficeHours";
import { ContactInfo } from "../components/ContactInfo";
import { GoogleMap } from "../components/GoogleMap";
import { AppointmentBooking } from "../components/AppointmentBooking";
import { DocumentUpload } from "../components/DocumentUpload";
import { PaymentForm } from "../components/PaymentForm";
import { ESignatureForm } from "../components/ESignatureForm";
import { FloatingActionButton } from "../components/FloatingActionButton";
import { useLang } from "../components/LanguageProvider";

export default function Home() {
  const { t, dir } = useLang();

  return (
    <main dir={dir} className="min-h-screen bg-gray-100 p-6 space-y-10">
      <LanguageSwitcher />
      <Hero3D />

      <section className="text-center">
        <h1 className="text-3xl font-bold">{t("title")}</h1>
        <p className="mt-2">{t("subtitle")}</p>
      </section>

      <AppointmentBooking />
      <DocumentUpload />
      <PaymentForm />
      <ESignatureForm />

      <GoogleMap address="1020 Elden St., Suite 203, Herndon, VA 20170" />
      <OfficeHours />
      <ContactInfo />

      <FloatingActionButton signUrl="/api/esign" />
    </main>
  );
}



