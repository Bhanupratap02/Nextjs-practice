
const Nav = () =>{
    retrun (
        <nav className={navStyles.nav}>
        <ul>
            <li>
      <Link href="/">Home</Link>
            </li>
             <li>
      <Link href="/about">About</Link>
            </li>
        </ul>
        </nav>
    )
}
 export default Nav