import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import Navbar from "../../components/Navbar";
import Navbar3 from "@/app/components/Navbar3/Navbar3_mag";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <div>
            <Navbar />
            <Navbar3 />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
