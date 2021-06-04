import { Switch, Route } from 'react-router-dom'
import List from './List'
import New from './New'
import Full from './Full'

export default function Router () {
  return (
    <Switch>
      <Route path='/person' exact component={List} />
      <Route path='/person/new' component={New} />
      <Route path='/person/:id' component={Full} />
    </Switch>
  )
}
