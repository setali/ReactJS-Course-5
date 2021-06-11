import { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { EyeOutlined } from '@ant-design/icons'
import axios from 'axios'
import Table from '../utils/Table'
import { setPosts, getPosts } from '../../redux/actions/posts'

export class List extends Component {
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
    this.props.getItems()
  }

  render () {
    return (
      <div>
        <Table data={this.props.posts} columns={this.columns} />
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
    // setItems: data => dispatch(setPosts(data))
    getItems: () => dispatch(getPosts())
    // getItems: () => getPosts(dispatch)
    // getItems: () => dispatch({ type: '', payload: {} })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
