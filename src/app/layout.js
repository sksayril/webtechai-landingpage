import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadPopup from "@/components/LeadPopup";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WebTechAI | Digital Growth Agency",
  description: "Architecting high-converting digital ecosystems using AI and precision marketing.",
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <LeadPopup />
      </body>
    </html>
  );
}
