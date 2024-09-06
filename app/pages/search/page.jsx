"use client"

import React, { useEffect, useState } from 'react';
import Searchbar from '../../components/searchbar/Searchbar';
// import fetchGoogleResults from './fetchGoogleResults';
import fetchGoogleResults from '../../fetching/google/Google2';
import fetchSubreddits from '../../fetching/Reddit/Subreddits';
import Card from '../../components/card/Card';
import Button from '../../components/button/Button';


export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [subredditInput, setSubredditInput] = useState('');
  const [pickedReddits, setPickedReddits] = useState([]);
  const [subredditSuggestions, setSubredditSuggestions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  useEffect(
    () => {
      if (subredditInput.length >= 3) {
        fetchSubreddits(subredditInput)
          .then(results => setSubredditSuggestions(results.map(sr => sr.title)))
          .catch(err => setError(err.message));
      } else {
        setSubredditSuggestions([]);
      }
    }, [subredditInput]
  );



  const handleInputChange = (e) => {
    setSearchQuery(e.target.value)
  };

  const handleSelectChange = (e) => {
    setPickedReddits(e.target.value)
  };

  const handleSelectFilter = (e) => {
    if (e && e.target) {
      setSubredditInput(e.target.value);
    }
  };

  const handleConsoleLog = () => {
    console.log("searchQuery: " + searchQuery);
    // console.log("searchQuery: " + searchQuery);
    console.log("subredditInput: " + subredditInput);
    console.log("pickedReddits: " + pickedReddits);
    console.log("setSubredditSuggestions: " + subredditSuggestions);
  }



  // adds search query SearchTerm + PickedReddits and passes it to fetch google function. 
  // Return value (data) and Total results are destructured from the object google function returns
  const handleSearchClick = async () => {
    if (searchQuery && pickedReddits.length > 0) {
      const combinedSearchTerm = `${searchQuery} ${pickedReddits.map(sr => `site:reddit.com/r/${sr}`).join(' OR ')}`;

      try {
        setLoading(true);
        const { data, totalResults } = await fetchGoogleResults(combinedSearchTerm, 1);
        setSearchResults(data);
        setTotalResults(totalResults);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };



  return (
    <>

      <Card
        size="wide"
        content={<>
          <Searchbar
            inputValue={searchQuery}
            inputChange={handleInputChange}

            selectValue={pickedReddits}
            selectOptions={subredditSuggestions}
            selectChange={handleSelectChange}
            selectFilter={handleSelectFilter}
            click={handleSearchClick}
          />

          {/* TODO */}
          {/* results here. append results page  */}

          <div>
            <Button
              // type, click, form, content
              click={handleConsoleLog}
              content="Console.log"

            />
          </div>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          <pre>{JSON.stringify(searchResults, null, 2)}</pre>
          <p>Total Results: {totalResults}</p>
        </>}
      />

    </>
  );
}
