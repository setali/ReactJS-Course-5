import { Component } from 'react'
import axios from 'axios'
import Table from '../utils/Table'

export class List extends Component {
  state = {
    users: [],
    loading: false
  }

  columns = [
    { title: 'شناسه', key: 'id' },
    { title: 'نام', key: 'name' },
    {
      title: 'آدرس',
      key: 'address',
      render: (f, r) => `${f.country} ${f.city} ${f.street} ${r.phone}`
    }
  ]

  componentDidMount () {
    this.setState({ loading: true })
    axios('http://jsonplaceholder.ir/users').then(response =>
      this.setState({
        loading: false,
        users: response.data
      })
    )
  }

  render () {
    console.log(this.state)
    return (
      <div>
        <Table
          data={this.state.users}
          columns={this.columns}
          loading={this.state.loading}
        />
      </div>
    )
  }
}

export default List
