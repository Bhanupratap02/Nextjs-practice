import Head from 'next/head'
import { Fragment } from 'react'



export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>webdev Newz</title>
        
      </Head>
      <h1>Welcome to next </h1>
    </Fragment>
  )
}
export const getStaticProps = async