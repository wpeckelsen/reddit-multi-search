import Button from '../../components/button/Button'
import Card from '../../components/card/Card'
import Grid from '../../components/grid/Grid'
import React from 'react'
import ProfileForm from '../../components/profileForm/ProfileForm'
import { createClient } from '../../supabase/server'


export default async function page() {
    const supabase = createClient();
    let user;

    // Ensure that supabase.auth is defined before calling getUser()
    // if (supabase.auth) {
    //     const {
    //         data: { user },
    //     } = await supabase.auth.getUser();
    // }


// Ensure that supabase.auth is defined before calling getUser()
if (supabase.auth) {
    const {
        data: { user: userData },
    } = await supabase.auth.getUser();
    user = userData;
}



    return (
        <Card
            title="Profile"
            subtitle="Do stuff here"
            size="wide"
            content={<>

                <ProfileForm
                    user={user}

                />


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
