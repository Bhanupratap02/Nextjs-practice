import Head from 'next/head'
export default function Home({articles}) { 
  console.warn(articles)
  return (
    <div>
      <Head>
        <title>webdev Newz</title>
      </Head>
      
       {articles.map((article) =>{
         <h3>{articles.article.title}</h3>
       })}
    </div>
  )
}
export const getStaticProps = async () =>{
  const res = await fetch (`
  https://jsonplaceholder.typicode.com/posts?_limit=6
  `)
  const articles = await res.json();
  return {
    props:{
     articles
    }
  }
}