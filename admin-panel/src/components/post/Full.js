import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Divider } from 'antd'
import axios from 'axios'
import { getPost } from '../../redux/actions/posts'

function Full () {
  const { id } = useParams()

  const dispatch = useDispatch()

  const post = useSelector(state => state.post)

  useEffect(() => {
    dispatch(getPost(id))
  }, [id])

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
