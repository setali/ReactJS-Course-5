import { useState, useReducer } from 'react'

function getId (todos) {
  return todos.length ? todos[todos.length - 1].id + 1 : 1
}

function reducer (state, { type, payload }) {
  switch (type) {
    case 'ADD_TODO':
      return [...state, { id: getId(state), title: payload }]

    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== payload)

    default:
      return state
  }
}

function TodosUseState () {
  const [todos, dispatch] = useReducer(reducer, [])
  const [task, setTask] = useState('')

  function addTodo () {
    dispatch({ type: 'ADD_TODO', payload: task })
    setTask('')
  }

  function removeTodo (id) {
    dispatch({ type: 'REMOVE_TODO', payload: id })
  }

  return (
    <div>
      <ol>
        {todos.map(({ id, title }) => (
          <li key={id}>
            {id} - {title}
            <span
              style={{ color: 'red', margin: '10px', cursor: 'pointer' }}
              onClick={() => removeTodo(id)}
            >
              x
            </span>
          </li>
        ))}
      </ol>
      <input type='text' value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={addTodo}>Add</button>
    </div>
  )
}

export default TodosUseState
