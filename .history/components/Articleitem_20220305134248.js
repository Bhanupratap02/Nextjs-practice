import Link from "next/link"
import artcleStyles from "../styles/Article.module.css"

function Articleitem({article}) {
  return (
  <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className={article}>

      </a>
  </Link>
  )
}

export default Articleitem