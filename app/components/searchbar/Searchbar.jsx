import React from 'react';
import Button from '../button/Button';
import Grid from '../grid/Grid';
import "./searchbar.scss";
import { MultiSelect } from 'primereact/multiselect';

export default function Searchbar({ inputValue, inputChange, selectValue, selectOptions, selectChange, click, selectFilter }) {


  return (
    <div>
      <Grid
        // User inputs custom search query here
        a={<>
          <input className='searchInput'
            type="text"
            placeholder=""
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
            onFilter={selectFilter}

          />
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
