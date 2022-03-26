import headerStyle from "../styles/Header.module.css"

function Header() {
    
  return (
    <div className={headerStyle.title}>
        <h1>
            <span>Wendev</span>Newz
        </h1>
    </div>
  )
}

export default Header