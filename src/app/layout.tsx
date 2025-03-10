"use client";
import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

import { useState } from "react";
import { Sidebar, Navbar, Footer } from "@/app/components/generales";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// export const metadata: Metadata = {
//   title: "Portafolio",
//   description: "Mi portafolio personal con Next.js",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false); // Estado del Sidebar

  return (
    <html lang="es" className="h-screen ">
      <body className={`${roboto.variable} ${robotoMono.variable} antialiased w-full fixed`}>
        {/* Navbar con control de sidebar */}
        <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />

        {/* Contenedor principal que crece hasta llenar el espacio disponible */}
        <div className="flex w-full ">
          <Sidebar collapsed={collapsed} />
          <div className="container-fluid w-full pb-48 mt-6 ml-4">
            {children}
          </div>
        </div>

        {/* Footer siempre al final */}
        <div className="w-full fixed bottom-0 text-white text-center ">
          <Footer />
        </div>
      </body>
    </html>
  );
}
