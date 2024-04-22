"use client"
import Card from '../../components/card/Card'
import Link from 'next/link'
import React from 'react'
import { signup } from '../../auth/actions/actions';
import Button from '../../components/button/Button'
import Grid from '../../components/grid/Grid'

export default function page() {

  async function handleForm(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signup(email, password);
  }


  return (
    <Card
      size="narrow"
      switchTitle={
        <>
          <h2>
            <Link href="signup" className='switch-title-active'>Sign up</Link>
            <span> / </span>
            <Link href="login" className='switch-title'>Log in</Link>
          </h2>
        </>
      }
      content={
        <>          
          <form onSubmit={(e) => handleForm(e)}>

            <Grid
              a={
                <>

                  <input id="email" name="email" type="email" required placeholder='email@mail.com' />
                </>
              }

              b={
                <>

                  <input id="password" name="password" type="password" required placeholder=" . . ." />
                </>
              }
              c={
                <>
                  <Button
                    type="submit"
                    form={signup}
                    content="Sign up"
                  />
                </>
              }
            />




          </form>
        </>
      }
    />
  )
}
