
import Button from '@/app/components/button/Button'
import Card from '@/app/components/card/Card'
import Searchbar from '@/app/components/searchbar/Searchbar'
import Google from '@/app/helpers/google/Google'

import Link from 'next/link'
import React from 'react'

export default function SearchPage() {
  return (
    <>
      <Card
        size="wide"        
        // title="Combine your searchterm with a list of Subreddits"
        content={
          <>
            <Google/>
          </>
        }
      />
    </>
  )
}
