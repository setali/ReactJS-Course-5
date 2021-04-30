import React from 'react'

class LifeCycle extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: 0
    }
    console.log('constructor')
  }

  componentDidMount () {
    console.log('componentDidMount')
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(data => console.log(data))
  }

  static getDerivedStateFromProps (props, state) {
    console.log('getDerivedStateFromProps', props, state)

    if (state.counter % 2) {
      return {
        counter: state.counter + 1
      }
    }

    return null
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate')
    console.log('nextState =>', nextState)

    if (nextState.counter % 4 === 0) {
      return false
    }

    return true
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    //   this.props
    //   this.state
    console.log('componentDidUpdate', prevProps, prevState, snapshot)
  }

  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate')
    console.log('prevState =>', prevState)
    console.log('this.state.counter =>', this.state.counter)
    return this.state.counter - prevState.counter
  }

  render () {
    console.log('render')
    return (
      <div>
        Counter: {this.state.counter}
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 7 })}
        >
          +7
        </button>
      </div>
    )
  }
}

export default LifeCycle
