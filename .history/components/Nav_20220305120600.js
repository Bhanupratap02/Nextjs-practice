
import React from 'react'

function Nav() {
  return (
    <div> <nav className={navStyles.nav}>
        <ul>
            <li>
      <Link href="/">Home</Link>
            </li>
             <li>
      <Link href="/about">About</Link>
            </li>
        </ul>
        </nav></div>
  )
}


 export default Nav
 import navStyles from "../styles/Nav.module.css"
import Link from "next/link"