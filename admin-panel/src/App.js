import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import Footer from './components/generic/Footer'
import Sidebar from './components/generic/Sidebar'
import Header from './components/generic/Header'
import Dashboard from './components/generic/Dashboard'
import Person from './components/person/Router'
import Post from './components/post/Router'
import 'antd/dist/antd.css'
import './asstes/css/general.css'

const { Content } = Layout

class App extends Component {
  render () {
    return (
      <Layout style={{ minHeight: '100vh' }}>
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
      </Layout>
    )
  }
}

export default App
