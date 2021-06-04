import { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { EyeOutlined } from '@ant-design/icons'
import axios from 'axios'
import Table from '../utils/Table'
import { setPosts } from '../../redux/actions/posts'

export class List extends Component {
  state = {
    posts: [],
    loading: false
  }

  columns = [
    { title: 'شناسه', key: 'id' },
    { title: 'عنوان', key: 'title' },
    {
      key: 'actions',
      render: (field, record) => (
        <Link to={`/post/${record.id}`}>
          <EyeOutlined />
        </Link>
      )
    }
  ]

  componentDidMount () {
    this.setState({ loading: true })
    // this.props.setItems([])
    axios('https://jsonplaceholder.typicode.com/posts').then(response => {
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
          data={this.props.posts}
          columns={this.columns}
          loading={this.state.loading}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setItems: data => dispatch(setPosts(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
