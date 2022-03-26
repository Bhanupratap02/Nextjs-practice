import artcleStyles from "../styles/Article.module.css"

const  ArticleList = (article) => {
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