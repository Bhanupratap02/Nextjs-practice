import styles from "../styles/Layout.module.css"
import Header from "./Header"
import Nav from "./Nav"

const  Layout = ({children}) => {
   return ( 
       <>
       <Nav/>
     <div className={styles.container }>
     <main className={styles.main}>
         <h1>Hello</h1>
         <Header/>
       {children}
     </main>
     </div>
     </>
   )
 }
 
 export default Layout