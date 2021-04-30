import { Component } from 'react'

class Counter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: this.props.initCounter
    }
    this.increase = this.increase.bind(this)
  }

  increase () {
    this.setState({ counter: this.state.counter + 1 })
  }

  decrease = () => this.setState({ counter: this.state.counter - 1 })

  render () {
    console.log(this.state.counter)
    return (
      <div>
        Counter: {this.state.counter}
        {/* <button onClick={this.increase.bind(this)}>+</button> */}
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
        {/* <button onClick={() => this.decrease()}>-</button> */}
      </div>
    )
  }
}

export default Counter
