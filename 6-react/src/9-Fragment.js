import React, { Component, Fragment } from 'react'

const data = [
  { name: 'Ali', family: 'Mousavi' },
  { name: 'Ali', family: 'Parvizi' },
  { name: 'Damoon', family: 'Darvishi' },
  { name: 'Hamed', family: 'Karimian' },
  { name: 'Hasan', family: 'Rabiei' },
  { name: 'Maryam', family: 'Kave' }
]

export class Table extends Component {
  render () {
    return (
      <table border={1}>
        {data.map(el => (
          <tr key={el.name + el.family}>
            <Column el={el} />
          </tr>
        ))}
      </table>
    )
  }
}

class Column extends Component {
  render () {
    return (
      <>
        <td>{this.props.el.name}</td>
        <td>{this.props.el.family}</td>
      </>
    )
  }
}

export default Table
