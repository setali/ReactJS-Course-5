class Counter extends React.Component {
  state = {
    value: 0,
    users: [],
    firstName: 'Ali',
    family: {}
  }

  counter = () => React.createElement('span', {}, this.state.value)

  increaseButton = () =>
    React.createElement(
      'button',
      {
        style: { margin: '10px' },
        onClick: () => this.setState({ value: this.state.value + 1 })
      },
      'Increase'
    )

  decreaseButton = () =>
    React.createElement(
      'button',
      {
        onClick: () => {
          this.state.value && this.setState({ value: this.state.value - 1 })
        }
      },
      'Decrease'
    )

  render () {
    return React.createElement(
      'div',
      {},
      this.counter(),
      this.increaseButton(),
      this.decreaseButton()
    )
  }
}

const wrapper = React.createElement(Counter)

ReactDOM.render(wrapper, document.getElementById('root'))
