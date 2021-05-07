import { Component } from 'react'
import { Layout } from 'antd'
import Footer from './components/generic/Footer'
import Sidebar from './components/generic/Sidebar'
import Header from './components/generic/Header'
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
          <Content className={'content'}>داشبورد مدیریتی من</Content>
          <Footer />
        </Layout>
      </Layout>
    )
  }
}

export default App
