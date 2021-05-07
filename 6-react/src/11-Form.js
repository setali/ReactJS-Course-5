import React, { Component } from 'react'

// class Form extends Component {
//   constructor () {
//     super()
//     this.state = {
//       username: '',
//       password: ''
//     }

//     this.handleChangeUsername = this.handleChangeUsername.bind(this)
//   }

//   handleChangeUsername (e) {
//     this.setState({ username: e.target.value })
//   }
//   handleChangePassword (e) {
//     this.setState({ password: e.target.value })
//   }

//   handleSubmit (e) {
//     e.preventDefault()
//     console.log(this.state)
//     this.setState({
//       username: '',
//       password: ''
//     })
//   }

//   render () {
//     return (
//       <div>
//         <form onSubmit={e => this.handleSubmit(e)}>
//           <label>username:</label>
//           <input
//             type='text'
//             value={this.state.username}
//             onChange={this.handleChangeUsername}
//           />
//           <label>password:</label>
//           <input
//             type='text'
//             value={this.state.password}
//             onChange={this.handleChangePassword.bind(this)}
//           />
//           <input type='submit' value='Submit' />
//         </form>
//       </div>
//     )
//   }
// }

class AdvancedForm extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: ''
    }

    this.handleChangeInput = this.handleChangeInput.bind(this)
  }

  handleChangeInput (e) {
    console.log(e.target.name)
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit (e) {
    e.preventDefault()
    console.log(this.state)
    this.setState({
      username: '',
      password: ''
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>username:</label>
          <input
            type='text'
            name='username'
            value={this.state.username}
            onChange={this.handleChangeInput}
          />
          <label>password:</label>
          <input
            type='text'
            name='password'
            value={this.state.password}
            onChange={this.handleChangeInput}
          />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default AdvancedForm
