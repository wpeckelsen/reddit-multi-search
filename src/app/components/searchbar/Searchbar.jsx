

import React from 'react'
import Button from '../button/Button';
import Grid from '../grid/Grid';
import "./searchbar.scss";
import { MultiSelect } from 'primereact/multiselect';

export default function Searchbar({ inputValue, inputChange, selectValue, selectOptions, selectChange, click }) {


  return (
    <div>
      <Grid
        // User inputs custom search query here
        a={<>
          <input className='searchInput'
            type="text"
            placeholder="Search..."
            value={inputValue}
            onChange={inputChange}
          />
        </>}

        // User picks a subreddit here
        b={<>



          <MultiSelect
          className='multi-select'
            value={selectValue}
            options={selectOptions}
            onChange={selectChange}
            maxSelectedLabels={8}
            optionLabel="name"
            placeholder="Pick Subreddits"
            display="chip"
            filter
          />



          {/* 
          <select id="subredditSelect" onChange={onDropDown}>
            <option value="">Select a subreddit</option>
            <option value="site:reddit.com/r/dog ">Dog</option>
            <option value="site:reddit.com/r/cats ">Cats</option>
            <option value="site:reddit.com/r/horses ">horses</option>
          </select> */}
        </>}

        c={
          <>
            <Button
              click={click}
              type="button"
              content={<> <p className='icon'>⌕</p> </>}
            />
          </>
        }
      />
    </div>
  )
}
