import React, { Component } from 'react'

export class Title extends Component {
  //   static defaultProps = {
  //     color: 'Green',
  //     name: 'Ali'
  //   }

  render () {
    return (
      <div>
        <h1 style={{ color: this.props.color }}>{this.props.name}</h1>
      </div>
    )
  }
}

export default Title

Title.defaultProps = {
  color: 'Green',
  name: 'Ali'
}
