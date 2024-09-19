import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Dossou Marcel",
  description:
    "Bienvenue sur le portfolio de Dossou Marcel, un expert en économie et en développement durable. Explorez mes projets, mes publications et mon expérience professionnelle.",
  keywords:
    "Dossou Marcel, portfolio, économie, développement durable, publications, projets",
  robots: "index, follow" // Indique aux robots de Google d'indexer le site
};

// Déplace la configuration du viewport ici
export const viewport = {
  width: "device-width",
  initialScale: 1.0
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/Dossou Marcel.png" type="image/png" />
      <head>
        <meta property="og:title" content="Portfolio | Dossou Marcel" />
        <meta
          property="og:description"
          content="Bienvenue sur le portfolio de Dossou Marcel, un expert en économie et en développement durable."
        />
        <meta property="og:image" content="/images/Dossou Marcel.png" />
        <meta property="og:url" content="https://dossoumarcel.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio | Dossou Marcel" />
        <meta
          name="twitter:description"
          content="Bienvenue sur le portfolio de Dossou Marcel, un expert en économie et en développement durable."
        />
        <meta name="twitter:image" content="/images/Dossou Marcel.png" />
        {/* Ajoute la balise viewport ici */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
