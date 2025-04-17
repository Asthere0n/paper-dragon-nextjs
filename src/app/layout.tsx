import type { Metadata } from "next";
import { Bangers, Rajdhani, Architects_Daughter } from 'next/font/google';
import "./globals.css";

const bangers = Bangers({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bangers'
});

const rajdhani = Rajdhani({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-rajdhani'
});

const architectsDaughter = Architects_Daughter({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-architects-daughter'
});

export const metadata: Metadata = {
  title: "Paper Dragon: Character Sheets",
  description: "DnD Character sheets manager and creator.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bangers.variable} ${rajdhani.variable} ${architectsDaughter.variable}`}>
      <head>
        
      </head>
      <body className={`${bangers.variable} ${rajdhani.variable} ${architectsDaughter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}