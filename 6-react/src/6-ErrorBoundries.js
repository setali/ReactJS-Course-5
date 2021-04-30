import { Component } from 'react'

export class Parent extends Component {
  render () {
    return (
      <div>
        <ErrorBoundries>
          <Child />
        </ErrorBoundries>
        Hi Ali
      </div>
    )
  }
}

class ErrorBoundries extends Component {
  state = { hasError: false }

  // static getDerivedStateFromError (Error) {
  //   console.log(Error)
  //   return { hasError: true }
  // }

  componentDidCatch (error, errorInfo) {
    console.log('My Error =>', errorInfo)
    this.setState({ hasError: true })
  }

  render () {
    if (this.state.hasError) {
      return 'Sorry! App crashed. call to administrator'
    }

    return this.props.children
  }
}

class Child extends Component {
  state = { counter: 0 }

  render () {
    if (this.state.counter === 4) {
      throw new Error('App crashed')
    }

    return (
      <div>
        Child: {this.state.counter}
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increase
        </button>
      </div>
    )
  }
}

export default Parent
