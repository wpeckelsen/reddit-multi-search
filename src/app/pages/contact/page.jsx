import Card from '@/app/components/card/Card'
import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <Card
      size="narrow"
      title="Contact"
      subtitle="Wessel Peckelsen"
      content={
        <> <p>
          <Link href="mailto:wpeckelsen @ gmail com">wpeckelsen@gmail.com</Link>
          </p>


        </>
      }
    />
  )
}
