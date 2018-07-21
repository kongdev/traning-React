import { createStore, applyMiddleware, compose } from 'redux'

import reducers from '../reducers'
import thunk from 'redux-thunk'

function createReduxStore (initState) {
  const store = createStore(
    reducers,
    initState,
    compose(
      applyMiddleware(thunk),
      //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
  return store
}

export default createReduxStore
