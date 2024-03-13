"use client"

import React from 'react'
import { useState } from 'react';
import Button from '../button/Button';
import Grid from '../grid/Grid';

export default function Searchbar() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // onSearch(e.target.value);
  }



  return (


    <div>

      <Grid
        a={<>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </>}

        b={<> <p>some reddit picker</p> </>}

        c={
          <>
            <Button
              content={<> <p className='icon'>⌕</p> </>}
              
            />
          </>
        }
      />




    </div>
  )
}
