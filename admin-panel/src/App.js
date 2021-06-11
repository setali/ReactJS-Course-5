import { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Layout } from 'antd'
import Login from './components/generic/Login'
import Footer from './components/generic/Footer'
import Sidebar from './components/generic/Sidebar'
import Header from './components/generic/Header'
import Dashboard from './components/generic/Dashboard'
import Person from './components/person/Router'
import Post from './components/post/Router'
import { getUser } from './redux/actions/user'
import 'antd/dist/antd.css'
import './asstes/css/general.css'

const { Content } = Layout

function App () {
  const dispatch = useDispatch()

  const isLoggedIn = useSelector(state => state.isLoggedIn)

  useEffect(() => {
    console.log('alooooooooooo')
    dispatch(getUser())
  }, [])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {!isLoggedIn ? (
        <Login />
      ) : (
        <>
          <Sidebar />
          <Layout>
            <Header />
            <Content className={'content'}>
              <Switch>
                <Route path='/' exact component={Dashboard} />
                <Route path='/person*' exact component={Person} />
                <Route path='/post*' exact component={Post} />
              </Switch>
            </Content>
            <Footer />
          </Layout>
        </>
      )}
    </Layout>
  )
}

export default App
