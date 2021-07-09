import axios from 'axios'
import Main from '../../layouts/Main'
import Link from 'next/link'

function Users ({ users }) {
  return (
    <Main>
      <div>
        <h3>Users list</h3>
        <ol>
          {users.map(user => (
            <li key={user.id}>
              <Link href={`/user/${user.id}`}>
                <a>{user.name}</a>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </Main>
  )
}

export async function getStaticProps () {
  const { data: users } = await axios(
    'https://jsonplaceholder.typicode.com/users'
  )

  users.length = 5
  console.log('Users count:', users.length)

  return {
    props: {
      users
    },
    revalidate: 5 // seconds
  }
}

export default Users
