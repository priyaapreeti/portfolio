import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/layout/AppShell";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Preeti Priya | Portfolio",
  description: "Personal portfolio and projects of Preeti Priya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${ovo.variable} scroll-smooth`}>
      <body className="font-outfit antialiased leading-8 overflow-x-hidden bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-300">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
