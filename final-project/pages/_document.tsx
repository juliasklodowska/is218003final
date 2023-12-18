import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Analytics Script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EHXRD5E77E"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EHXRD5E77E');
            `,
          }}
        />
      </Head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
