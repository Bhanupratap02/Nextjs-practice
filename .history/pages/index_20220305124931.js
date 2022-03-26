import Head from 'next/head'
import { Fragment } from 'react'



export default function Home({articles}) { 
  return (
    <Fragment>
      <Head>
        <title>webdev Newz</title>
      </Head>
   
    </Fragment>
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