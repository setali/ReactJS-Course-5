import { Component } from 'react'
import Tasks from './Tasks'
import Button from './Button'

class App extends Component {
  render () {
    return (
      <div>
        <h2>My tasks</h2>
        <Button permission='add-task'>Add task</Button>
        <Tasks permission='view-task-list' />
      </div>
    )
  }
}

export default App
