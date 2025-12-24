import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LanguageProvider } from "../components/LanguageProvider";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
      />
      <Script strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>

      <Component {...pageProps} />
    </LanguageProvider>
  );
}


