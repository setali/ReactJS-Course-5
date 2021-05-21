import React, { useEffect, useState, useCallback } from 'react'

function UseCallback () {
  const [count, setCount] = useState(0)
  const [height, setHeight] = useState(0)
  useEffect(() => {
    setInterval(() => setCount(s => s + 1), 1000)
  }, [])

  //   const myInput = node => {
  //     node?.focus()
  //   }

  const myInput = useCallback(node => {
    node?.focus()
  }, [])

  const myHeight = useCallback(node => {
    node && setHeight(node?.getBoundingClientRect().height.toFixed(2))
  }, [])

  return (
    <div>
      Count: {count}
      <hr />
      <h3 ref={myHeight}>Salam</h3>
      Height: {height}
      <br />
      <input ref={myInput} />
    </div>
  )
}

export default UseCallback
