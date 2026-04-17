import type { Metadata } from "next";
import { Outfit, Instrument_Serif } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const instrument = Instrument_Serif({ weight: "400", subsets: ["latin"], variable: "--font-instrument" });

export const metadata: Metadata = {
  title: "La Manivelle | Meubles Sur Mesure",
  description: "Artisanal cardboard furniture and workshops in Cliponville, France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${outfit.variable} ${instrument.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
