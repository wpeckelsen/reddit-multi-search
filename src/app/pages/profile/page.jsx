import Button from '@/app/components/button/Button'
import Card from '@/app/components/card/Card'
import Grid from '@/app/components/grid/Grid'
import React from 'react'


export default function page() {
    return (
        <Card
            title="Profile"
            subtitle="Do stuff here"
            size="wide"
            content={<>
                <Grid
                    a="username"
                    b="password"
                    c="button"
                    d="more stuff"
                    
                />

                

                <h3>Saved Reddits</h3>
                <Grid
                    a={<><h4>Dog</h4></>}
                    b="r/dogs, r/animals, r/puppies"
                    c={<>
                    <Button
                    content={<>
                    <p className='icon'>⌕</p>
                    </>}
                    />
                    

                    </>}
                    d="more stuff"
                    
                />


            </>}
        />
    )
}
