'use client'
import SearchSnippet from '../../components/SearchSnippet/SearchSnippet';
import Button from '../../components/button/Button';
import Searchbar from '../../components/searchbar/Searchbar';
import React from 'react'



import { useState, useEffect } from 'react';

// to do: pull apart client and server components
export default function Google() {


    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSubreddit, setSelectedSubreddit] = useState('');
    const [totalResults, setTotalResults] = useState(0);
    const [index, setIndex] = useState(1);
    const [clickCount, setClickCount] = useState(0);
    const [pickedReddits, setPickedReddits] = useState([]);

    const mockList = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' },
        { name: 'Tokyo', code: 'TKY' },
        { name: 'Berlin', code: 'BER' },
        { name: 'Sydney', code: 'SYD' },
        { name: 'Moscow', code: 'MOW' },
        { name: 'Madrid', code: 'MAD' },
        { name: 'Beijing', code: 'BJ' },
        { name: 'Singapore', code: 'SG' },
        { name: 'Dubai', code: 'DXB' },
    ];



    const combinedSearchTerm = `${searchTerm} ${pickedReddits}`;



    async function fetchResults() {
        const key = process.env.GOOGLE_API_KEY;
        const cx = process.env.GOOGLE_CX;
        const url = `https://www.googleapis.com/customsearch/v1?q=${combinedSearchTerm}&key=${key}&cx=${cx}&start=${index}`;
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


    const handleSelectChange = (e) => {
        setPickedReddits(e.value);
    };




    return (
        <div>
            <Searchbar
                inputValue={searchTerm}
                inputChange={handleInputChange}
                selectValue={pickedReddits}
                selectOptions={mockList}
                selectChange={handleSelectChange}
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
