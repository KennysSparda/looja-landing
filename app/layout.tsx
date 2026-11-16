import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LOOJA — Validade, estoque e promotores em um só lugar",
  description:
    "A LOOJA cruza controle de validade, estoque e promotores num painel único, para sua loja nunca mais perder dinheiro com produto parado ou vencido.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={archivo.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
