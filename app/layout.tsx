import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JK Bank - Antecipe seus recebíveis com rapidez e segurança",
  description: "Dinheiro no mesmo dia, sem a burocracia tradicional dos bancos. Antecipação de recebíveis rápida, simples e segura para empresas em todo o Brasil.",
  keywords: ["antecipação de recebíveis", "JK Bank", "crédito empresarial", "securitização", "capital de giro"],
  authors: [{ name: "JK Bank" }],
  openGraph: {
    title: "JK Bank - Antecipe seus recebíveis com rapidez e segurança",
    description: "Dinheiro no mesmo dia, sem a burocracia tradicional dos bancos.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "JK Bank - Antecipe seus recebíveis com rapidez e segurança",
    description: "Dinheiro no mesmo dia, sem a burocracia tradicional dos bancos.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans">{children}</body>
    </html>
  );
}
