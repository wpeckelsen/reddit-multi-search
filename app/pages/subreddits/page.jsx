import React from 'react';
import { createClient } from '../../supabase/client';

export default async function page() {
    const supabase = createClient()



    let { data: reddits, error } = await supabase
        .from('reddits')
        .select('*')

    return (
        <div>
            {reddits ? (
                <pre>{JSON.stringify(reddits, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}