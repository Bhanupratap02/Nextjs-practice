import Link from "next/link"
import { useRouter } from "next/router"

const article = ({article}) => {
    // const router = useRouter()
    // const {id} = router.query 
  return (
    <>
    
    {/* <h1>{article.title}</h1>
    <p>{article.body}</p>
    <br/>
    <Link href="/">Go back</Link> */}
    </>
  )
}
export const getStaticProps = async (context) => {
 const res = await fetch (`
 https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
 const article = await res.json()
 return{
     props: {
         article,
     },
 }
}
export const getStaticPaths = async () =>{
     const res = await fetch (`
 https://jsonplaceholder.typicode.com/posts`)
 const article = await res.json()
 const ids = articles.map(articles => article.id)
 const paths = ids.map(id => ({params:{id:id.toStri}}))
 return {
     paths:{params:{id:"1",id:"2"}}
 }
}
export default article 