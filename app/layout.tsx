import type { Metadata } from "next";
import "./globals.css";
import "./library.css";

export const metadata: Metadata = {
  title: "FinaleScript Studio — Construtor visual",
  description: "Crie automações FinaleScript com ações guiadas, modelos e pré-visualização instantânea.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
