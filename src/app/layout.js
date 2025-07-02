import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";



// Page metadata (SEO / browser tab info)
export const metadata = {
  title: "Podcast App",
  description: "Podcast search and browse",
};
// Root layout component used across all pages
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Main body with fonts */}
      <body
        className={`antialiased bg-background text-white font-sans`}
      >
        <div className="min-h-screen flex">
          {/* Sidebar */}
          <Sidebar />

          {/* Main content area – changes per route */}
          <main className="flex-1 overflow-auto py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
