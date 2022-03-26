import headerStyle from "../styles/Header.module.css"

function Header() {
    
  return (
    <div className={headerStyle.title}>
        <h1>
            <span>Wendev</span>Newz
        </h1>
        <p className="">Keep up to date with the  latest web dev news </p>
    </div>
  )
}

export default Header