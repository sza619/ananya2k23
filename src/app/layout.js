import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const poppins = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Ananya2k23",
  description: "A page allll about Ananya2k23",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${poppins.className} mx-14 my-5`}>
      <head></head>
      <body>
        <header>
          <Header />
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
