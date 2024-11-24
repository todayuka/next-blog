import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "nextjs_ブログ_ハンズオン",
  description: "nextjs_ブログ_ハンズオン",
  robots: {
    index: false,
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <main className="flex flex-col min-h-screen justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
