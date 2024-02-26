import { Inter } from "next/font/google";
import './styles/globals.scss';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reddit Multi Search",
  description: "Search multiple Subreddits at once!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
