import React from 'react';
import Link from "next/link";
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="home-link">
        <Link href="/"> <p>
          <b>Home</b>
        </p></Link>

      </div>

      <div className="nav-links">
        <Link href="/pages/login"> 
        <p>
          <b>Log in</b>
        </p>
        </Link>

        <Link href="/pages/contact"> 
        <p>
          <b>contact</b>
        </p>
        </Link>

        <Link href="/pages/profile"> 
        <p>
          <b>Profile</b>
        </p>
        </Link>

      </div>
    </nav>
  )
}
