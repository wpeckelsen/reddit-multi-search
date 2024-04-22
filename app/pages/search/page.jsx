
import Link from 'next/link';
import Card from '../../components/card/Card'
import Google from '../../helpers/google/Google'
import { React } from 'react';
import { fetchReddits } from '../../auth/actions/actions';


export default function SearchPage() {
  
  
  
  


  return (
    <>
      <Card
        size="wide"              
        content={
          <>
          

            <Google            
            />
          </>
        }
      />
    </>
  )
}
