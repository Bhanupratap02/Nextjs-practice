 import artcleStyles from "../styles/Article.module.css" 
 import Articleitem from "./Articleitem"
const  ArticleList = ({articles} ) => {
  return (
    <div className={artcleStyles.grid}>
         {articles.map(article =>{
         return(
         <Articleitem key={article} article={article}/>
         )
        
       })}

    </div>   
  )
}

export default ArticleList