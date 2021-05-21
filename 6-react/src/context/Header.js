import React, { Component } from 'react'
import ThemeContext from './ThemeContext'

export class Header extends Component {
  render () {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <div
            style={{
              border: '1px solid',
              margin: '1em',
              padding: '1em',
              ...theme
            }}
          >
            Header
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Header
