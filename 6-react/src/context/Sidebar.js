import React, { Component } from 'react'
import ThemeContext from './ThemeContext'

export class Sidebar extends Component {
  static contextType = ThemeContext

  render () {
    return (
      <div
        style={{
          border: '1px solid',
          margin: '1em',
          padding: '1em',
          flex: 1,
          ...this.context
        }}
      >
        <h4>Sidebar</h4>
        <ul>
          <li>Home</li>
        </ul>
      </div>
    )
  }
}

export default Sidebar
