import React, { Component, PureComponent } from 'react'

export class App extends Component {
  state = {
    counter1: 0,
    counter2: 0
  }

  render () {
    return (
      <div>
        <div>Counter 1: {this.state.counter1}</div>
        <div>Counter 2: {this.state.counter2}</div>
        <button
          onClick={() => this.setState(s => ({ counter1: s.counter1 + 1 }))}
        >
          Change counter 1
        </button>
        <button
          onClick={() => this.setState(s => ({ counter2: s.counter2 + 1 }))}
        >
          Change counter 2
        </button>

        <MyPureComponent counter={this.state.counter1} />
        <MyComponent counter={this.state.counter1} />
      </div>
    )
  }
}

class MyPureComponent extends PureComponent {
  render () {
    console.log('MyPureComponent render')
    return <div>My PureComponent {this.props.counter}</div>
  }
}

class MyComponent extends Component {
  //   shouldComponentUpdate (nextProps, nextState, nextContext) {
  //     return nextProps.counter !== this.props.counter
  //   }

  render () {
    console.log('MyComponent render')
    return <div>My Component {this.props.counter}</div>
  }
}

export default App
