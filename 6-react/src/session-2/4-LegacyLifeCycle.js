import { Component } from 'react'

class LegacyLifeCycle extends Component {
  UNSAFE_componentWillMount () {
    console.log('UNSAFE_componentWillMount')
  }

  UNSAFE_componentWillReceiveProps (nextProps, nextContext) {
    console.log('UNSAFE_componentWillReceiveProps')
  }

  UNSAFE_componentWillUpdate (nextProps, nextState, nextContext) {}

  render () {
    console.log('render')

    return <div>LegacyLifeCycle</div>
  }
}

export default LegacyLifeCycle
