import { useState, useEffect } from 'react'

export const App = () => {
  const [show, setShow] = useState(true)

  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
      {show && <Counter />}
    </div>
  )
}

const Counter = () => {
  const [status, setStatus] = useState(0)
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState([])

  // cDM, cDU, cWU
  useEffect(() => {
    console.log({ counter })
    const timeoutId = setTimeout(() => setCounter(counter + 1), 15000)

    console.log('M timeoutid', timeoutId, counter)

    return () => {
      console.log('U timeoutid', timeoutId, counter)
      clearTimeout(timeoutId)
    }
  }, [counter])

  // cDM, cWU
  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    fetch('https://jsonplaceholder.typicode.com/users', { signal })
      .then(res => res.json())
      .then(data => setUsers(data))

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <div>
      <ol>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
      <hr />
      Counter: {counter}
      <hr />
      {status}
      <button onClick={() => setStatus(status + 1)}>+</button>
    </div>
  )
}

export default App
