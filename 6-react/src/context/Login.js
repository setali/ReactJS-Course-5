import React, { useContext } from 'react'
import { Redirect, useLocation, useHistory } from 'react-router-dom'
import ThemeContext from './ThemeContext'
import UserContext from './UserContext'

export default function Login () {
  const theme = useContext(ThemeContext)
  const { authenticated, user, login, loading } = useContext(UserContext)
  const location = useLocation()

  // const { state } = location

  const history = useHistory()

  if (loading) {
    return null
  }

  if (authenticated) {
    // if (state?.oldPathname) {
    //   return <Redirect to={state.oldPathname} />
    // }

    history.goBack()
  }

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
      <h2>Login page</h2>
      <button onClick={() => login()}>Login</button>
    </div>
  )
}
