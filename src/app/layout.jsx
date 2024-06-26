import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <header className="bg-[#993c3c] h-[50px] ">
          <h1>Header</h1>
        </header>
        {children}
        <footer className="bg-[#4150c3] h-[50px]">
          <h2>Footer</h2>
        </footer>
      </body>
    </html>
  );
}
