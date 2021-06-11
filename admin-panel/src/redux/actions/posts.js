import request from '../../tools/request'

export function setPosts (data) {
  return { type: 'POSTS', payload: data }
}

export function setPost (data) {
  return { type: 'POST', payload: data }
}

export function getPosts () {
  return (dispatch, getState) => {
    request('/posts').then(response => {
      dispatch(setPosts(response.data))
    })
  }
}

export function getPost (id) {
  return dispatch =>
    request(`/posts/${id}`).then(response => dispatch(setPost(response.data)))
}
