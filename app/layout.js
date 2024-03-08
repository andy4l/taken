import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/interactive/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "This Week at TAK≡N",
  description: "This Week at Taken",
};

export default function StandardLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
