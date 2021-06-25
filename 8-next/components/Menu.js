import Link from 'next/link'

function Menu () {
  return (
    <menu>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='/post'>
            <a>Posts</a>
          </Link>
        </li>
        <li>
          <Link href='/user'>
            <a>Users</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        ul {
          list-style: none;
        }
      `}</style>
    </menu>
  )
}

export default Menu
