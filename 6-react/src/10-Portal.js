import { Component } from 'react'
import ReactDOM from 'react-dom'

const portal = document.getElementById('portal')

export class Portal extends Component {
  state = { counter: 0 }

  componentDidMount () {
    setInterval(() => this.setState({ counter: this.state.counter + 1 }), 1000)
  }

  render () {
    return ReactDOM.createPortal(this.state.counter, portal)
  }
}

export default Portal
