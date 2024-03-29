import { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { EyeOutlined } from '@ant-design/icons'
import axios from 'axios'
import Table from '../utils/Table'
import { setPersons } from '../../redux/actions/person'

export class List extends Component {
  state = {
    loading: false
  }

  columns = [
    { title: 'شناسه', key: 'id' },
    { title: 'نام', key: 'name' },
    {
      title: 'آدرس',
      key: 'address',
      render: (f, r) => `${f?.city} ${f?.street} ${r?.phone}`
    },
    {
      key: 'actions',
      render: (field, record) => (
        <Link to={`/person/${record.id}`}>
          <EyeOutlined />
        </Link>
      )
    }
  ]

  componentDidMount () {
    this.setState({ loading: true })
    axios('https://jsonplaceholder.typicode.com/users').then(response => {
      this.setState({
        loading: false
      })

      this.props.setItems(response.data)
    })
  }

  render () {
    return (
      <div>
        <Table
          data={this.props.persons}
          columns={this.columns}
          loading={this.state.loading}
        />
      </div>
    )
  }
}

// export default List

const mapStateToProps = state => {
  return {
    persons: state.persons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setItems: data => dispatch(setPersons(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
