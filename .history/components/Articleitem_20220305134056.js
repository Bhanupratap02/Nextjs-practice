import Link from "next/link"
import artcleStyles from "../styles/Article.module.css"

function Articleitem({article}) {
  return (
  <Link href="/article/[id]" as={`/article/${article}`}></Link>
  )
}

export default Articleitem