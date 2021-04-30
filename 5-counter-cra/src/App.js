import React from 'react'
import { Mardan as Farzaneh } from './Mardan'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      value: 0
    }
  }

  render () {
    return (
      <div>
        <span>{this.state.value}</span>
        <button
          style={{ margin: '10px' }}
          onClick={() => this.setState({ value: this.state.value + 1 })}
        >
          Increase
        </button>
        <button
          onClick={() => {
            this.state.value && this.setState({ value: this.state.value - 1 })
          }}
        >
          Decrease
        </button>
        <Farzaneh />
      </div>
    )
  }
}

export default App
