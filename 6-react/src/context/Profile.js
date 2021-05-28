import React, { useContext } from 'react'
import { Redirect } from 'react-router'
import ThemeContext from './ThemeContext'
import UserContext from './UserContext'

export default function Profile () {
  const theme = useContext(ThemeContext)
  const { user } = useContext(UserContext)

  return (
    <div
      style={{
        border: '1px solid',
        margin: '1em',
        padding: '1em',
        flex: 3,
        ...theme
      }}
    >
      <h2>My Profile page</h2>

      <p>name: {user.name}</p>
    </div>
  )
}
