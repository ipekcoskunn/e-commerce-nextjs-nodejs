import type { Metadata } from "next";
import '@/app/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

import Header from "@/components/header";
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: "E-Commerce Site",
  description: "E-Commerce Site - İpek Coskun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
