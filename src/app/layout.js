import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Personal Portfolio",
  description: "A look at me & my Motorcycle customizing Skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}> <header className="w-100">
          <nav className="flex justify-center w-100 ">
            <Link
              className="m-1 text-emerald-500 hover:text-emerald-700"
              href="/"
            >
              Home
            </Link>
            <Link
              className="m-1 text-emerald-500 hover:text-emerald-700"
              href="/pages/about"
            >
              About
            </Link>
            <Link
              className="m-1 text-emerald-500 hover:text-emerald-700"
              href="/pages/products"
            >
              Product
            </Link>

            <Link
              className="m-1 text-emerald-500 hover:text-emerald-700"
              href="/pages/projects"
            >
              Projects
            </Link>

            <Link
              className="m-1 text-emerald-500 hover:text-emerald-700"
              href="/pages/contact"
            >
              Contact
            </Link>
          </nav>
        </header>
        {children}
        <footer className="text-center">&copy; Elgin Sharper - Personal Portfolio </footer>
        </body>
    </html>
  );
}