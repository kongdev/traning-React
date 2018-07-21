import React from 'react'
import ReactDOM from 'react-dom'
import Cookies from 'universal-cookie'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'

import { ApolloProvider } from 'react-apollo'
import createApolloClient from './libs/createApolloClient'
import createReduxStore from './libs/createReduxStore'

const cookies = new Cookies()

const token = cookies.get('token')
const initState = {auth: {token}}

const store = createReduxStore(initState)
const client = createApolloClient(store)

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
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root'))
