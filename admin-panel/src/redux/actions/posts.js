import axios from 'axios'

export function setPosts (data) {
  return { type: 'POSTS', payload: data }
}

export function getPosts () {
  return (dispatch, getState) => {
    // dispatch(setPosts([]))

    if (!getState()['posts'].length) {
      axios('https://jsonplaceholder.typicode.com/posts').then(response => {
        dispatch(setPosts(response.data))
      })
    }
  }
}
