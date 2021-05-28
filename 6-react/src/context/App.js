import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import axios from 'axios'
import cookie from 'js-cookie'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Posts from './Posts'
import Post from './Post'
import Login from './Login'
import Profile from './Profile'
import Page404 from './404'
import Sidebar from './Sidebar'
import ThemeContext, { themes } from './ThemeContext'
import UserContext from './UserContext'
import PrivateRoute from './PrivateRoute'

function App () {
  const [theme, setTheme] = useState(themes.light)

  const [user, setUser] = useState({})
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // const token = cookie.get('token')
    // if (token) {
    //   getUser()
    // } else {
    //   setLoading(false)
    // }

    cookie.get('token') ? getUser() : setLoading(false)
  }, [])

  function login () {
    axios('https://jsonplaceholder.typicode.com/users/1').then(response => {
      setUser(response.data)
      setAuthenticated(true)
      cookie.set('token', 'TOKEN', { expires: 7 })
    })
  }

  function getUser () {
    setLoading(true)
    axios('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        setUser(response.data)
        setAuthenticated(true)
      })
      .finally(() => setLoading(false))
  }

  function logout () {
    setUser({})
    setAuthenticated(false)
    cookie.remove('token')
  }

  return (
    <div>
      <Router>
        <UserContext.Provider
          value={{ user, login, authenticated, logout, loading }}
        >
          <ThemeContext.Provider value={theme}>
            {themes.light === theme ? (
              <button onClick={() => setTheme(themes.dark)}>Dark</button>
            ) : (
              <button onClick={() => setTheme(themes.light)}>Light</button>
            )}
            <Header />
            <section style={{ display: 'flex' }}>
              <Sidebar />
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' component={Login} />
                {/* <Route path='/Profile' component={Profile} /> */}
                <PrivateRoute path='/Profile' component={Profile} />
                <Route path='/about' component={About} />
                <Route path='/post' exact>
                  <Posts />
                </Route>
                <Route path='/post/:id' render={props => <Post {...props} />} />
                <Route path='*' component={Page404} />
                {/* <Redirect to={'/'} /> */}
              </Switch>
            </section>

            <Footer />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </Router>
    </div>
  )
}

export default App
