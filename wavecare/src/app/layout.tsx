import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/Components/NavBar/NavBar";

const playfairDisplay = Playfair_Display({
  weight: "400",
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  weight: "400",
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WaveCare",
  description: "Cuidados com o seu cabelo",
};

const lufga = localFont({
  src: [
    {
      path: '../../public/Lufga/Fontspring-DEMO-lufga-regular.otf',
      weight:'400',
      style: 'normal',
    },

    {
      path: '../../public/Lufga/Fontspring-DEMO-lufga-medium.otf',
      weight:'500',
      style: 'normal',
    },

    {
      path: '../../public/Lufga/Fontspring-DEMO-lufga-bold.otf',
      weight:'700',
      style: 'normal',
    }
  ],
  variable: '--font-lufga',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${playfairDisplay.variable} ${dmSans.variable} ${lufga.variable} `}
      >

        <NavBar/>
        {children}
      </body>
    </html>
  );
}
