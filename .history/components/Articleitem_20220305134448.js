import Link from "next/link"
import artcleStyles from "../styles/Article.module.css"

function Articleitem({article}) {
  return (
  <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className={artcleStyles.card}>
          <h3>{article.title} 
          &rarr; </h3>
          <p>{article}</p>

      </a>
  </Link>
  )
}

export default Articleitem