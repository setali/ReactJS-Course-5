import { useEffect, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  //   if (count % 2) {
  //     const [ali, setAli] = useState('Ali')
  //   }

  //   const [state, setState] = useState(2)

  //   function func () {
  //     const [state, setState] = useState(2)
  //   }

  //   for (let index = 0; index < 5; index++) {
  //     const [state, setState] = useState(2)
  //   }

  useEffect(() => {
    console.log('salam')
  }, [count])

  return <div>{count}</div>
}

export default App
