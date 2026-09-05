import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Borges Burger | Vila Nova de Gaia",
  description: "Borges Burger — hamburgueria em Vila Nova de Gaia.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT">
      <body>{children}</body>
    </html>
  );
}
