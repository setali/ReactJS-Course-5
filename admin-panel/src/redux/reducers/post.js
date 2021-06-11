export function posts (state = [], action) {
  switch (action.type) {
    case 'POSTS':
      return action.payload

    default:
      return state
  }
}

export function post (state = {}, action) {
  switch (action.type) {
    case 'POST':
      console.log(action.payload)
      return action.payload

    default:
      return state
  }
}
