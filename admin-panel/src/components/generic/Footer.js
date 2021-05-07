import React, { Component } from 'react'
import { Layout } from 'antd'

const { Footer: AntFooter } = Layout

export class Footer extends Component {
  render () {
    return (
      <AntFooter style={{ textAlign: 'center' }}>
        ReactJS Course May 2021
      </AntFooter>
    )
  }
}

export default Footer
