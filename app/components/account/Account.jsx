'use client'
import { useCallback, useEffect, useState } from 'react';
import { createClient } from '../../supabase/client';
import Grid from '../grid/Grid';
import Button from '../button/Button';
import { logout } from '../../auth/actions/actions';




export default function Account({ user }) {
  // const supabase = createClient()
  const supabase = createClient();
  const [loading, setLoading] = useState(true)



  const getUserName = useCallback(async () => {
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser()
      console.log("hello");
    } finally {
      setLoading(false)
    }
  }, [user, supabase])



  useEffect(() => {
    getUserName()
  }, [user, getUserName])



  return (
    <Grid
      a={<>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={user?.email} disabled />
      </>}
      b={<>
        <label htmlFor="email">Password</label>
        <input id="password" type="password" value={user?.email} disabled />
      </>}
      c={<>
        <Button
        content="Sign out"
        click={() => {logout()}}
        type='submit'
        />
      </>}



      d="more stuff"

    />
  )

}