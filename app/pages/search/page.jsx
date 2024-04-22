
import Link from 'next/link';
import Card from '../../components/card/Card'
import Google from '../../helpers/google/Google'
import { React } from 'react';


export default function SearchPage() {
  
  



  return (
    <>
      <Card
        size="wide"              
        content={
          <>
          <Link href="subreddits">hello</Link>

            <Google/>
          </>
        }
      />
    </>
  )
}
