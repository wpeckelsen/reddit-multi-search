import { Inter } from "next/font/google";
import './styles/globals.scss';
import Navbar from "./components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reddit Multi Search",
  description: "Search multiple Subreddits at once!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <body className={inter.className}>

        <div className="background">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        
        </div>

        <Navbar />

        <span className="flex-content">
          {children}
        </span>
      </body>

    </html>
  );
}
