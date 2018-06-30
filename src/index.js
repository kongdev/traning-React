import React from 'react'
import ReactDOM from 'react-dom'
import Cookies from 'universal-cookie';
import './index.css'
import App from './App'
import { createStore,applyMiddleware,compose } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import thunk from 'redux-thunk';


const cookies = new Cookies();

const token = cookies.get('token')
const store = createStore(
	reducers,
	{auth : {token}},
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)

)

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
