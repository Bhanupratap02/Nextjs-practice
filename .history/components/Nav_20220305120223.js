import navStyles from "../styles/Nav.module.css"
import Link from "next/link"
const Nav = () =>{
    retrun (
        <nav className={navStyles.nav}>
        <ul>
            <li>
      <Link href="/">Home</Link>
            </li>
             <li>
      <Link href="/about">Abouit</Link>
            </li>
        </ul>
        </nav>
    )
}
