import React from 'react'
// import Counter from './1-Counter'
// import LifeCycle from './2-LifeCycle'
// import ForceUpdate from './3-ForceUpdate'
// import LegacyLifeCycle from './4-LegacyLifeCycle'
// import Unmounting from './5-Unmounting'
// import ErrorBoundries from './6-ErrorBoundries'
// import DefaultProps from './7-DefaultProps'
import ListKeys from './8-ListKeys'

class App extends React.Component {
  render () {
    return (
      <div>
        <ListKeys />
        {/* <DefaultProps name={'Qoli'} color={'red'} />
        <DefaultProps />
        <DefaultProps name={'Eli'} color={'yellow'} /> */}
        {/* <ErrorBoundries /> */}
        {/* <Unmounting /> */}
        {/* <LegacyLifeCycle /> */}
        {/* <ForceUpdate /> */}
        {/* <LifeCycle /> */}
        {/* <Counter initCounter={2} /> */}
        {/* <Counter initCounter={5} />
        <Counter initCounter={8} /> */}
      </div>
    )
  }
}

export default App
