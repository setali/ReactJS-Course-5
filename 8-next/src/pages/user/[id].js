import axios from 'axios'
import Main from '../../layouts/Main'

function User ({ user = {} }) {
  return (
    <Main>
      <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    </Main>
  )
}

export async function getStaticPaths () {
  //   const paths = [
  //     { params: { id: '1' } },
  //     { params: { id: '2' } },
  //     { params: { id: '3' } }
  //   ]

  const { data: users } = await axios(
    'https://jsonplaceholder.typicode.com/users'
  )

  users.length = 5

  const paths = users.map(user => ({ params: { id: `${user.id}` } }))

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps ({ params }) {
  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  )
  console.log('id:', params.id)
  return {
    props: {
      user
    },
    revalidate: 5
  }
}

export default User
