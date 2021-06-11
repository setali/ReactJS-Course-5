import { createReducer } from '@reduxjs/toolkit'
import { setPosts, setPost } from '../actions/posts'

export const posts = createReducer([], {
  [setPosts]: (state, { payload }) => payload
})

export const post = createReducer(
  {},
  {
    [setPost]: (state, { payload }) => payload
  }
)

// export function posts (state = [], action) {
//   switch (action.type) {
//     case 'POSTS':
//       return action.payload

//     default:
//       return state
//   }
// }

// export function post (state = {}, action) {
//   switch (action.type) {
//     case 'POST':
//       console.log(action.payload)
//       return action.payload

//     default:
//       return state
//   }
// }
