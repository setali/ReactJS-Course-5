import { useState } from 'react'

function getInitialData () {
  return 999n ** 99999n
}

function Counter () {
  //   const myState = useState(0)
  const [state, setState] = useState(getInitialData)
  const [count, setCount] = useState(10)

  return (
    <div>
      <button onClick={() => setState(state + 1)}>+</button>
      <hr />
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
  //   return (
  //     <div>
  //       {myState[0]}
  //       <button onClick={() => myState[1](myState[0] + 1)}>+</button>
  //     </div>
  //   )
}

export default Counter
