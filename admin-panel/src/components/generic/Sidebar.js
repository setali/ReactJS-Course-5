import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  DashboardOutlined,
  UserOutlined,
  SnippetsOutlined
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'

const { Sider } = Layout
const { SubMenu } = Menu

export class Sidebar extends Component {
  state = {
    collapsed: false
  }

  onCollapse = collapsed => {
    console.log(collapsed)
    this.setState({ collapsed })
  }

  render () {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className='logo' />
        <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
          <Menu.Item key='2' icon={<DashboardOutlined />}>
            <Link to='/'>داشبورد</Link>
          </Menu.Item>
          <SubMenu key='person' icon={<UserOutlined />} title='مدیریت کاربران'>
            <Menu.Item key='3'>
              <Link to='/person'>لیست کاربران</Link>
            </Menu.Item>
            <Menu.Item key='4'>
              <Link to='/person/new'>ایجاد کاربر</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key='post' icon={<SnippetsOutlined />}>
            <Link to='/post'>مقالات</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default Sidebar
