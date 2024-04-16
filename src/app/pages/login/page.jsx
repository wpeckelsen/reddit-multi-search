"use client"
import Card from '@/app/components/card/Card'
import Link from 'next/link';
import React from 'react'

export default function page() {


  return (
    <>


      <Card
        size="narrow"
        switchTitle={<>
          <h2>
            <Link href="login" className='switch-title-active'>Log in</Link>
            <span> / </span>
            <Link href="signup" className='switch-title'>Sign up</Link>
          </h2>
        </>}
        
        content={
          <>
          <p>Log in!!</p>
          </>
        }
      />


    </>


  )
}
