import SearchSnippet from '../../components/SearchSnippet/SearchSnippet'
import Card from '../../components/card/Card'
import React from 'react'


export default function page() {

    

    return (
        <>
            <Card
                title="Results"
                size="wide"
                content={<>

                    <SearchSnippet
                        formattedUrl="reddit.com/cats"
                        title="https://reddit.com/cats/awwww"
                        snippet="so cool cat look here aww"
                    />
                    


                </>}

            />
        </>
    )
}