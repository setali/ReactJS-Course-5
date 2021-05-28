import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from './ThemeContext'

export class Footer extends Component {
  render () {
    return (
      <div
        style={{
          border: '1px solid',
          margin: '1em',
          padding: '1em',
          ...this.context
        }}
      >
        Footer
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/post'}>Posts</Link>
          </li>
        </ul>
      </div>
    )
  }
}

Footer.contextType = ThemeContext

export default Footer
