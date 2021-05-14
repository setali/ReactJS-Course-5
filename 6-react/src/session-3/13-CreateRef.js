import React, { Component } from 'react'

export class CreateRef extends Component {
  state = { show: false }

  textInput = React.createRef()

  toggleInput () {
    this.setState(
      state => ({
        show: !state.show
      }),
      () => {
        console.log(this.textInput.current)
        this.textInput.current?.focus()
      }
    )
  }

  render () {
    return (
      <div>
        <button onClick={() => this.toggleInput()}>
          {this.state.show ? 'Hide' : 'Show'}
        </button>
        <hr />
        {this.state.show && <input ref={this.textInput} type='text' />}
      </div>
    )
  }
}

export default CreateRef
