import React, { Component } from 'react'
import { Layout } from 'antd'
import '../../asstes/scss/header.scss'
const { Header: AntHeader } = Layout

export class Header extends Component {
  render () {
    return (
      <AntHeader
        className='site-layout-background header'
        style={{ padding: 0 }}
      >
        داشبورد
      </AntHeader>
    )
  }
}

export default Header
