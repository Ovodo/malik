import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
const font = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr. Malik Abdullahi Adaviriku",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.png' />
      </head>
      <body className={`${font.className}`}>
        <Navbar />
        <main className='flex min-h-screen [background:linear-gradient(180deg,rgb(255,247.03,238)_0%,rgba(174.45,174.45,174.45,0)_100%)] flex-col items-center justify-start '>
          {children}
        </main>
        <footer className='grid place-content-center min-h-[20vh] text-white bg-gray-800'>
          <div className='text-center'>Copyright © 2023 .</div>
        </footer>
      </body>
    </html>
  );
}
