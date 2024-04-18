
import Card from '../../components/card/Card';
import Link from 'next/link';
import React from 'react';
import { login, signup } from './actions';
import Button from '../../components/button/Button';

export default function page() {


  return (
    <>


      <Card
        size="narrow"
        switchTitle={<>
          <h2>
            <Link href="login" className='switch-title-active'>Log in</Link>
            <span> / </span>
            <Link href="signup" className='switch-title'>Sign up</Link>
          </h2>
        </>}

        content={
          <>
            <form>
              <label htmlFor="email">Email:</label>
              <input id="email" name="email" type="email" required />
              <label htmlFor="password">Password:</label>
              <input id="password" name="password" type="password" required />

              <Button
                type="form"
                form={login}
                content="Log in"

              />
              
              <Button
                type="form"
                form={signup}
                content="Sign up"
              />
            </form>
          </>
        }
      />


    </>


  )
}
