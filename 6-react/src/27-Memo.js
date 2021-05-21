import React, { useState } from 'react'

function App () {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)
  return (
    <div>
      <div>Counter 1: {counter1}</div>
      <div>Counter 2: {counter2}</div>
      <button onClick={() => setCounter1(s => s + 1)}>Change counter 1</button>
      <button onClick={() => setCounter2(s => s + 1)}>Change counter 2</button>

      <MyMemoComponent counter={counter1} />
      <MyComponent counter={counter1} />
    </div>
  )
}

function MyComponent ({ counter }) {
  console.log('MyComponent render')
  return <div>MyComponent {counter}</div>
}

const MyMemoComponent = React.memo(function ({ counter }) {
  console.log('MyMemoComponent render')
  return <div>MyMemoComponent {counter}</div>
})

export default App
