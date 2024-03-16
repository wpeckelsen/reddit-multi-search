import Link from "next/link";
import Navbar from "./components/navbar/Navbar";
import Button from "./components/button/Button";


export default function Home() {
  return (
    <>
      <h1>Google through multiple Subreddits!</h1>
    
      <Button
        content={<Link href="/pages/search">Search</Link>}
      />
    </>
  );
}