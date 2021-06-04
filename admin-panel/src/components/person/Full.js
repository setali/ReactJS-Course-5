import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Divider } from 'antd'
import axios from 'axios'

function Full () {
  const { id } = useParams()

  const [person, setPerson] = useState({})

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`).then(response =>
      setPerson(response.data)
    )
  }, [id])

  console.log(id)
  return (
    <div>
      <h3>نمایش کاربر</h3>
      <Divider />
      <label>نام:</label>
      <Divider type='vertical' />
      <span>{person.name}</span>
      <Divider />
      <label>ایمیل:</label>
      <Divider type='vertical' />
      <span>{person.email}</span>
      <Divider />
      <Link to='/person'>بازگشت به لیست</Link>
    </div>
  )
}

export default Full
