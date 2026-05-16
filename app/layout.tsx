import Script from "next/script"
import type { Metadata } from "next"
import "./globals.css"


export const metadata = {
  title: "DefiMind — Inteligência Financeira em Tempo Real",
  description:
    "Crypto, Wall Street, IA e mercados globais com notícias automatizadas pela Neurex AI.",

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    title: "DefiMind",
    description:
      "Crypto Intelligence powered by Neurex AI",
    siteName: "DefiMind",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (

<html
  lang="en"
  className="
  h-full
  antialiased
  "
>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2880959670955365"
          crossOrigin="anonymous"
        ></script>
      </head>

      <body
        className="
      min-h-full
      flex
      flex-col
      bg-[#030712]
      text-white
      "
      >
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VZDMVH6QGN"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer =
            window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag(
              'config',
              'G-VZDMVH6QGN'
            );
          `}
        </Script>

        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js"
              strategy="afterInteractive"
            />

            <Script
              id="onesignal-init"
              strategy="afterInteractive"
            >
              {`
                window.OneSignalDeferred =
                window.OneSignalDeferred || [];

                OneSignalDeferred.push(async function(OneSignal){

                  await OneSignal.init({

                    appId: "6898177d-34db-4b25-b3de-4ea213e3f2db",

                  });

                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
