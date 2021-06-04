import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Divider } from 'antd'
import axios from 'axios'

function Full () {
  const { id } = useParams()

  const [post, setPost] = useState({})

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response =>
      setPost(response.data)
    )
  }, [id])

  console.log(id)
  return (
    <div>
      <h3>نمایش مقاله</h3>
      <Divider />
      <label>عنوان:</label>
      <Divider type='vertical' />
      <span>{post.title}</span>
      <Divider />
      <label>متن:</label>
      <Divider type='vertical' />
      <span>{post.body}</span>
      <Divider />
      <Link to='/post'>بازگشت به لیست</Link>
    </div>
  )
}

export default Full
