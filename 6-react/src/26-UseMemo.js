import React, { useEffect, useState, useMemo } from 'react'

const data = [
  { id: 1, title: 'yek', parentId: null },
  { id: 2, title: 'do', parentId: 1 },
  { id: 3, title: 'se', parentId: 1 },
  { id: 4, title: 'char', parentId: 2 },
  { id: 5, title: 'panj', parentId: 2 },
  { id: 6, title: 'shesh', parentId: 3 }
]

const lastData = [
  {
    id: 1,
    title: 'yek',
    children: [
      {
        id: 2,
        title: 'do',
        children: [
          { id: 4, title: 'char' },
          { id: 5, title: 'panj' }
        ]
      },
      { id: 3, title: 'se', children: [{ id: 6, title: 'shesh' }] }
    ]
  }
]

function UseMemo () {
  const [show, setShow] = useState(true)
  return (
    <div>
      {show && <Child />}
      <button onClick={() => setShow(s => !s)}>{show ? 'Hide' : 'Show'}</button>
    </div>
  )
}

function Child () {
  const [count, setCount] = useState(0)

  //   const [value, setValue] = useState(heavyProccess)

  //   useEffect(() => {
  //     setValue(heavyProccess())
  //   }, [])

  useEffect(() => {
    const intervalId = setInterval(() => setCount(s => s + 1), 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  function heavyProccess () {
    return (99999999999999999999n ** 9999n).toString()
  }

  const value = useMemo(() => {
    return heavyProccess()
  }, [])

  return (
    <div>
      count: {count}
      <hr />
      value: {value}
    </div>
  )
}

export default UseMemo
