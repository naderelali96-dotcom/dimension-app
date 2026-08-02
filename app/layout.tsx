import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SQUIRE_BRAND_ID } from "@/lib/site-config";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dimension — Barbershop",
  description: "Premium barbershop. Precision cuts, intentional craft.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable}`}>
      <body style={{ fontFamily: "var(--font-dm-sans), DM Sans, sans-serif" }} className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          id="squire-widget-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(e,t){var i=e.createElement("script"),sa="setAttribute";i.src="https://widget.getsquire.com/widget.js?"+Date.now(),i[sa]("defer",""),i[sa]("type","text/javascript"),i[sa]("brand",t.brand),i[sa]("x-squire-inline-enabled",t.inline||!1),e.head.appendChild(i)}(document,{brand:"${SQUIRE_BRAND_ID}",inline:true});`,
          }}
        />
      </body>
    </html>
  );
}
