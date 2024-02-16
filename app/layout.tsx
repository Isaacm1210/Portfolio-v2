import type { Metadata } from "next";
import { Inter, Roboto, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Montserrat({subsets: ["latin"], weight: ["400", "500", "700"]})

export const metadata: Metadata = {
  title: "Isaac Mhamed | Developer",
  description: "Isaac Mhamed is a Software Developer.... (I NEED TO MODIFY THIS)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
      </head>
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
