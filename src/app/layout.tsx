import type { Metadata } from "next";
import "./globals.css";
import { ReactQueryProvider } from "@/components";

export const metadata: Metadata = {
  title: "Aras Showbizz",
  description: "Aras Digital Products - Recruitment task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactQueryProvider>
        <body>{children}</body>
      </ReactQueryProvider>
    </html>
  );
}
