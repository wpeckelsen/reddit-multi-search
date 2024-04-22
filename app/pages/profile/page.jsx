import Button from '../../components/button/Button'
import Card from '../../components/card/Card'
import Grid from '../../components/grid/Grid'
import React from 'react'
import Account from '../../components/account/Account'
import { createClient } from '../../supabase/server'


export default async function page() {
    const supabase = createClient();
    let user;

    if (supabase.auth) {
        const {
            data: { user: userData },
        } = await supabase.auth.getUser();
        user = userData;
    }



    return (
        <Card
            title="Profile"            
            size="wide"
            content={<>            
               <Account
               user={user}
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
