import { combineReducers } from 'redux'
import { persons } from './person'
import { posts, post } from './post'
import { user, isLoggedIn } from './user'

export default combineReducers({
  persons,
  posts,
  post,
  user,
  isLoggedIn
})

// export default function reducer (state = {}, action) {
//   console.log(state, action)
//   switch (action.type) {
//     case 'PERSONS':
//       return { ...state, persons: action.payload }

//     case 'POSTS':
//       return { ...state, posts: action.payload }

//     default:
//       return state
//   }
// }
