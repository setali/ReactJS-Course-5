import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from './ThemeContext'
import UserContext from './UserContext'

export class Header extends Component {
  render () {
    return (
      <UserContext.Consumer>
        {({ login, user, authenticated, logout, loading }) => (
          <ThemeContext.Consumer>
            {theme => (
              <div
                style={{
                  border: '1px solid',
                  margin: '1em',
                  padding: '1em',
                  display: 'flex',
                  justifyContent: 'space-between',
                  ...theme
                }}
              >
                <h2>Header</h2>
                <div>
                  {!loading &&
                    (authenticated ? (
                      <span>
                        <span>{user.name}</span>{' '}
                        <span onClick={() => logout()} style={{ color: 'red' }}>
                          Logout
                        </span>
                      </span>
                    ) : (
                      <Link to='/login'>Login</Link>
                    ))}
                </div>
              </div>
            )}
          </ThemeContext.Consumer>
        )}
      </UserContext.Consumer>
    )
  }
}

export default Header
