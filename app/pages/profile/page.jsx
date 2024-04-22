import Button from '../../components/button/Button'
import Card from '../../components/card/Card'
import Grid from '../../components/grid/Grid'
import React from 'react'
import Account from '../../components/account/Account'
import { createClient } from '../../supabase/server'
import Link from 'next/link'


export default async function page() {
    const supabase = createClient();
    let user;


    if (supabase.auth) {
        const {
            data: { user: userData },
        } = await supabase.auth.getUser();
        user = userData;
    }


    const { data, error } = await supabase.auth.getSession()



    return (
        <Card
            title="Profile"
            size="wide"
            content={<>
                {data.session ?

                    <>

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

                    </>
                     
               
               
        
               
               
               : <p>
                        You're not logged in. <Link href="/auth/login">Log in</Link> or <Link href="/auth/signup">Sign up</Link> to view your profile.
                    </p>}







            </>}
        />
    )
}
