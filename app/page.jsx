import Link from "next/link";
import Navbar from "./components/navbar/Navbar";
import Button from "./components/button/Button";



export default function Home() {


  return (
    <>

      <h1>Google through endless Subreddits!</h1>
      
      <Link href="/pages/search">{
        <Button
          content={<> <p>start!</p> </>}          
        />}
      </Link>
   
    </>
  );
}