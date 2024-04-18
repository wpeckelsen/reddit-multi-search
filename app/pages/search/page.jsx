
import Button from '../../components/button/Button'
import Card from '../../components/card/Card'
import Searchbar from '../../components/searchbar/Searchbar'
import Google from '../../helpers/google/Google'

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
