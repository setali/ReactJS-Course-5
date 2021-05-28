import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ThemeContext from './ThemeContext'
import './sidebar.css'
import UserContext from './UserContext'

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
          <li>
            <NavLink to={'/'} exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={'/about'}>About</NavLink>
          </li>
          <li>
            <NavLink to={'/post'}>Posts</NavLink>
          </li>
          <UserContext.Consumer>
            {({ authenticated }) =>
              authenticated && (
                <li>
                  <NavLink to={'/profile'}>Profile</NavLink>
                </li>
              )
            }
          </UserContext.Consumer>
        </ul>
      </div>
    )
  }
}

export default Sidebar
