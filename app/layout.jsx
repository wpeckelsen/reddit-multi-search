
import './styles/globals.scss';
import Navbar from "./components/navbar/Navbar";
import Background from './styles/Background';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';        




export const metadata = {
  title: "Reddit Multi Search",
  description: "Search multiple Subreddits at once!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <Background />
        <Navbar />
        <PrimeReactProvider>
        <span className="flex-content">
          {children}
        </span>
        </PrimeReactProvider>
      </body>

    </html>
  );
}
