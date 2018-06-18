import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

const store = createStore(reducers)

//console.log(store.getState())
store.subscribe(() => {
  //console.log(store.getState())
})

/*
store.dispatch({
	type: 'INCREASE_COUNTER'
})
store.dispatch({
	type: 'CREATE_POST',
	title : 'Title',
	content : 'Content'
})
*/
ReactDOM.render(
	<Provider store={store}>
        <App />
	</Provider>, 
document.getElementById('root'))
