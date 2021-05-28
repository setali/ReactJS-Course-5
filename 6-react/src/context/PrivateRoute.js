import { Redirect, Route, useLocation } from 'react-router-dom'
import useUser from './useUser'

function PrivateRoute (props) {
  const { authenticated } = useUser()
  const { pathname } = useLocation()

  if (authenticated) {
    return <Route {...props} />
  }

  return (
    <Redirect push to='/login' />
    // <Redirect
    //   push
    //   to={{ pathname: '/login', state: { oldPathname: pathname } }}
    // />
  )
}

export default PrivateRoute
