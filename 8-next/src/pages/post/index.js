import Main from '../../layouts/Main'
import axios from 'axios'
import Link from 'next/link'
import Head from 'next/head'

function Posts ({ posts }) {
  return (
    <Main>
      <Head>
        <title>{posts[0].title}</title>
      </Head>
      <h2>Posts list</h2>
      <ol>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ol>
    </Main>
  )
}

export async function getServerSideProps () {
  const { data: posts } = await axios(
    'https://jsonplaceholder.typicode.com/posts'
  )

  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  //   const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Posts
