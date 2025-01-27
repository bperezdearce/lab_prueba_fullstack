import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_Mono } from "next/font/google";
import Header from "@/components/Header";

const notosansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-notosansMono",
});

export const metadata: Metadata = {
  title: "POcKETCG",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notosansMono.variable}>
        <Header />
        {children}</body>
    </html>
  );
}
