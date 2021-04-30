import React, { Component } from 'react'

export class DefaultProps extends Component {
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

export default DefaultProps

DefaultProps.defaultProps = {
  color: 'Green',
  name: 'Ali'
}
