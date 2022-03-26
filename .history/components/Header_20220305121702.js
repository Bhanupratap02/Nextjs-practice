import headerStyle from "../styles/Header.module.css"

function Header() {
    const x = 5;
  return (
    <div className="title">
        <h1>
            <span>Wendev</span>Newz
        </h1>
        <style jsx>
          {
              `
            .title{
                color:${x>3}
            }

              `
          }
        </style>
    </div>
  )
}

export default Header