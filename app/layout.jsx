import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Vercel KV for Redis Next.js Starter",
  description: "A simple Next.js app with Vercel KV for Redis as the database",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
