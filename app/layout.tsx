import Script from "next/script"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "DefiMind — Crypto Intelligence",
  description:
    "Notícias crypto inteligentes geradas pela Neurex AI.",

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
      className={`
      ${geistSans.variable}
      ${geistMono.variable}
      h-full
      antialiased
      `}
    >

      <body className="
      min-h-full
      flex
      flex-col
      bg-[#030712]
      text-white
      ">

        {children}

        <Script
          src="
          https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX
          "
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
