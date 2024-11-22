import type { Metadata } from "next";
import "./globals.css";
import { ReactQueryProvider } from "@/components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
        <ReactQueryDevtools />
      </ReactQueryProvider>
    </html>
  );
}
