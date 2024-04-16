import Card from '@/app/components/card/Card'
import Link from 'next/link'
import React from 'react'


export default function page() {
  return (
    <Card
      size="narrow"
      switchTitle={
        <>
          <h2>
            <Link href="signup" className='switch-title-active'>Sign up</Link>
            <span> / </span>
            <Link href="login" className='switch-title'>Log in</Link>
          </h2>
        </>
      }      
      content={
        <>
        <p>Sign up!!</p>
        </>
      }
    />
  )
}
