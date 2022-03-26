import headerStyle from "../styles/Header.module.css"

function Header() {
    
  return (
    <div className="title">
        <h1>
            <span>Wendev</span>Newz
        </h1>
        <style jsx>
          {
              `
            .title{
                color:${x>3 ? "red" : " blue"}
            }

              `
          }
        </style>
    </div>
  )
}

export default Header