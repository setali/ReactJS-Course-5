import React, { useEffect, useRef } from 'react'

function UseRef () {
  const myInputRef = useRef()

  useEffect(() => {
    myInputRef.current.focus()
  }, [])

  return (
    <div>
      <input type='text' ref={myInputRef} />
    </div>
  )
}

export default UseRef
