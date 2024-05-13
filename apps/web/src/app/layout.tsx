import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "snapify - A 01Node Project",
  description: "Snapify is a project that aims to make it easier to create and manage your validator nodes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen w-screen dark">
      <body className={cn(inter.className, "h-screen w-screen")}>{children}</body>
    </html>
  );
}
