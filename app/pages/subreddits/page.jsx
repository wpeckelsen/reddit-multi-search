import React from 'react';
import { createClient } from '../../supabase/client';
import { fetchPosts } from '../../auth/actions/actions';


export default async function page() {
    const supabase = createClient()
    const { data: posts } = await supabase.from('posts').select()
    // return <pre>{JSON.stringify(posts, null, 2)}</pre>

        return (
            <div>
                {posts ? (
                    <pre>{JSON.stringify(posts, null, 2)}</pre>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        );
    }