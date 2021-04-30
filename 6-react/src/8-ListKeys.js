import { Component } from 'react'

class Users extends Component {
  state = { users: [] }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data }))
  }

  render () {
    return (
      <div>
        <ul>
          {this.state.users.map(user => (
            <div key={user.id}>{user.name}</div>
          ))}
        </ul>
      </div>
    )
  }
}

export default Users
