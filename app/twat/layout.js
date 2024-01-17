import { Inter } from "next/font/google";
import TwatHeader from "./components/TwatHeader/TwatHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "This Week at TAK≡N",
  description: "This Week at Taken",
};

export default function TwatLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TwatHeader />
        {children}
      </body>
    </html>
  );
}
