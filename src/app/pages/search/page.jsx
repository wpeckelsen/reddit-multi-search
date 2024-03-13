import Button from '@/app/components/button/Button'
import Card from '@/app/components/card/Card'
import Searchbar from '@/app/components/searchbar/Searchbar'
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
           <Searchbar
           />

          </>
        }

      />
    </>

  )
}
