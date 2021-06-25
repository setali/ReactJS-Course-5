// import { useRouter } from 'next/router'
import Main from '../../layouts/Main'
import axios from 'axios'

function Post ({ post }) {
  //   const router = useRouter()

  //   console.log(router.query)

  return (
    <Main>
      <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </Main>
  )
}

export async function getServerSideProps ({ params }) {
  const { data: post } = await axios(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  )
  
  return {
    props: {
      post
    }
  }
}

export default Post
