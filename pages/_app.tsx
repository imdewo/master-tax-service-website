import { LanguageProvider } from "../components/language";
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
