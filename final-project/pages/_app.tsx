import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from 'next/router';
import "@/styles/globals.css";
import Script from "next/script";
import CookieConsent from '../components/cookieconsent'; 

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      {/* Google Analytics Scripts */}
      <Script 
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-EHXRD5E77E" 
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EHXRD5E77E');
        `}
      </Script>

      <NextUIProvider navigate={router.push}>
        {/* Setting the default theme to light and disabling system theme detection */}
        <NextThemesProvider defaultTheme="light" enableSystem={false}>
          <Component {...pageProps} />
        </NextThemesProvider>
      </NextUIProvider>

      {/* Cookie Consent Banner */}
      <CookieConsent />
    </>
  );
}
