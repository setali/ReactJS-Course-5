import { Component } from 'react'

class Users extends Component {
  state = {
    users: [
      { id: 1, name: 'Ali' },
      { id: 2, name: 'Hamed' },
      { id: 3, name: 'Mojtaba' }
    ]
  }

  render () {
    return (
      <div>
        {this.state.users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

function User ({ user }) {
  return (
    <div>
      <span>Name: </span>
      <span>{user.name}</span>
    </div>
  )
}

// class User extends Component {
//   render () {
//     return (
//       <div>
//         <span>Name: </span>
//         <span>{this.props.user.name}</span>
//       </div>
//     )
//   }
// }

export default Users
