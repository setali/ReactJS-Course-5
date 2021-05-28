import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import ThemeContext from './ThemeContext'

export default function Posts () {
  const theme = useContext(ThemeContext)
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => setPost(response.data))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div
      style={{
        border: '1px solid',
        margin: '1em',
        padding: '1em',
        flex: 3,
        ...theme
      }}
    >
      {loading && 'Loading ... !!!!'}
      <h2>{post.title}</h2>

      <p>{post.body}</p>
    </div>
  )
}
