import SearchSnippet from '@/app/components/SearchSnippet/SearchSnippet'
import Card from '@/app/components/card/Card'
import React from 'react'

export default function page() {
    return (
        <>
            <Card
                title="Results"
                size="wide"
                content={<>

                    <SearchSnippet
                        title="reddit.com/cats"
                        url="https://reddit.com/cats/awwww"
                        snippet="so cool cat look here"
                    />

                </>}

            />
        </>
    )
}
