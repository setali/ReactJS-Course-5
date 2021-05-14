import { Component } from 'react'

const user = {
  name: 'Ali',
  family: 'Mousavi',
  persmissions: ['view-task-list', 'remove-task', 'edit-task']
}

export default function ACL (Component) {
  return class MyACL extends Component {
    render () {
      return (
        user.persmissions.includes(this.props.permission) && (
          <Component {...this.props} />
        )
      )
      //   if (user.persmissions.includes(this.props.permission)) {
      //     return <Component />
      //   } else {
      //     return null
      //   }
    }
  }
}
