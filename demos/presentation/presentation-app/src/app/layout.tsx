// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { ContactButton } from "./components/ContactButton";
import { Header } from "./components/Header";

export const metadata: Metadata = {
  title: "Jasmine Catering"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link rel="shortcut icon" type="image/svg+xml" href="/logo.svg" />
        <link rel="apple-touch-icon" href="/logo.svg" />
      </head>
      <body className="bg-white">
        <div className="border-16 min-h-screen" style={{ borderColor: "var(--light-brown)" }}>
          <Navbar/>
          <ContactButton/>
          <Header/>
          {children}
          
        </div>
      </body>
    </html>
  );
}
