import React from 'react'
import ReactDOM from 'react-dom'

class Counter extends React.Component {
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
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'))
