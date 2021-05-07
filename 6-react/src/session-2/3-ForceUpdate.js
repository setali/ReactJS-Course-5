import React from 'react'

class ForceUpdate extends React.Component {
  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate')
  }

  shouldComponentUpdate (nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate')
  }

  render () {
    return (
      <div>
        {Math.random()}
        <button onClick={() => this.forceUpdate()}>Get Random</button>
      </div>
    )
  }
}

// class ForceUpdate extends React.Component {
//   state = {
//     random: Math.random()
//   }

//   render () {
//     return (
//       <div>
//         {this.state.random}
//         <button onClick={() => this.setState({ random: Math.random() })}>
//           Get Random
//         </button>
//       </div>
//     )
//   }
// }

export default ForceUpdate
