import Button from '@/app/components/button/Button'
import Card from '@/app/components/card/Card'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (

    <>
      <Card
        size="wide"
        title="Search multiple Reddits"
        subtitle="add as many subreddits as you want!!"
        content={
          <>
            <div>
            <Link href="search">search</Link>
              <Button
                content={<Link href="/">Search</Link>}
                type="button"
              />
            </div>

          </>
        }

      />
    </>

  )
}
