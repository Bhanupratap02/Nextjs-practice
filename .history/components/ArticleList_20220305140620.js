 import artcleStyles from "../styles/Article.module.css" 
 import Articleitem from "./Articleitem"
const  ArticleList = ({articles} ) => {
  return (
    <div className={artcleStyles.grid}>
         {articles.map(article =>{
         return(
       <h3>{article.title}</h3>
         )
        
       })}

    </div>
  )
}

export default ArticleList