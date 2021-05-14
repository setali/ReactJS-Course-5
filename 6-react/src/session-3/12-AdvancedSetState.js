import { Component } from 'react'

export class AdvancedSetState extends Component {
  state = {
    tasks: [],
    count: 0
  }

  generateTask () {
    const time = Date.now()

    return {
      title: `Task ${time}`,
      id: time
    }
  }

  addTask () {
    const task = this.generateTask()
    this.setState(state => ({
      tasks: [...state.tasks, task]
    }))
    this.setState(
      state => ({ count: state.tasks.length }),
      () => console.log('salam')
    )
  }

  render () {
    return (
      <div>
        <button onClick={() => this.addTask()}>Add task</button>

        <div>Count: {this.state.count}</div>
        <ol>
          {this.state.tasks.map(task => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ol>
      </div>
    )
  }
}

export default AdvancedSetState
