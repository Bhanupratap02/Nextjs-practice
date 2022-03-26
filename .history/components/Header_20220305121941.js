import headerStyle from "../styles/Header.module.css"

function Header() {
    
  return (
    <div className={headerStyle.title}>
        <h1>
            <span>Wendev</span>Newz
        </h1>
        <p>Keep up to date with the  latest</p>
    </div>
  )
}

export default Header