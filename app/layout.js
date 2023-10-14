import TemaProvider from "@/app/providers/TemaProvider";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "E-Commerce Page | Muhammet ÇELİK",
  description: "E-Commerce Page | Muhammet ÇELİK",
};

export default function RootLayout({ children }) {
  return (
    <TemaProvider>
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </TemaProvider>
  );
}
