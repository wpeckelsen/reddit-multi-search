'use client'


import SearchSnippet from '@/app/components/SearchSnippet/SearchSnippet';
import Button from '@/app/components/button/Button';
import Searchbar from '@/app/components/searchbar/Searchbar';
import React from 'react'
import { useState, useEffect } from 'react';

export default function Google() {


    const [searchResults, setSearchResults] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [selectedSubreddit, setSelectedSubreddit] = React.useState('');


    const [totalResults, setTotalResults] = React.useState(0);
    const [index, setIndex] = React.useState(1);
    const [clickCount, setClickCount] = React.useState(0);



    const combinedSearchTerm = `${searchTerm} ${selectedSubreddit}`;



    async function fetchResults() {
        const apiKey = 'AIzaSyAxrEVlU_KY8SkfpljpNk3HZ6wTZ1Yf0AA';
        const cx = '25e484cb53c6f4d68';
        const url = `https://www.googleapis.com/customsearch/v1?q=${combinedSearchTerm}&key=${apiKey}&cx=${cx}&start=${index}`;
        const response = await fetch(url);
        const data = await response.json();
        setSearchResults(prevResults => [...prevResults, ...(data.items || [])]);
        setTotalResults(data.searchInformation.totalResults);
        console.log("================");

        console.log(">> fetchResults index: " + index)

    }

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleDropdownChange = (event) => {
        setSelectedSubreddit(event.target.value);
    };




    async function handleClick() {
        setSearchResults([]);
        setIndex(1);
        await fetchResults();
    }



    async function loadMoreResults() {
        setIndex(index + 10);
        setClickCount(+1);
    }

    useEffect(() => {
        if (index > 10) {
            async function fetch() {
                await fetchResults();
            }
            fetch();

        }



    }, [index]);




    return (
        <div>
            <Searchbar
                inputValue={searchTerm}
                onSearch={handleInputChange}
                onDropDown={handleDropdownChange}
                click={handleClick}
            />

            {searchResults.length > 0 && (
                <div>
                    <ol>
                        {searchResults.map((item, index) => (
                            <li key={item.id}>
                                <SearchSnippet
                                    displayLink={item.displayLink}
                                    formattedUrl={item.formattedUrl}
                                    snippet={item.snippet}
                                />
                            </li>
                        ))}
                    </ol>
                    
                    {searchResults.length > 0 && totalResults > searchResults.length && (
                        clickCount > 4 ? (
                            <>
                                <Button
                                    content="Continue on Google"
                                    click={handleClick}
                                    type="button"
                                />
                            </>
                        ) : (
                            <>
                                <Button
                                    content="Load More"
                                    click={loadMoreResults}
                                    type="form"
                                />
                            </>)
                    )}
                </div>)
            }
        </div>
    )
}
