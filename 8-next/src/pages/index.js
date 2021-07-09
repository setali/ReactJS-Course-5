import Head from 'next/head'
import Main from 'layouts/Main'

function Home () {
  return (
    <Main>
      <Head>
        <title>ReactJS | Home Page</title>
      </Head>
      <div>Welcome to my blog {process.env.myName}</div>
    </Main>
  )
}

export default Home
