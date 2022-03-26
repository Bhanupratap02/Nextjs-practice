import Head from 'next/head'
import React from 'react'
 import ArticleList from '../components/ArticleList'
export default function Home({articles}) { 
  return (
    <div>
      <Head>
        <title>webdev Newz</title>
      </Head>
      <ArticleList articles={articles  }/>
      
    </div>
  ) 
}
//  