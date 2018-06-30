import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'
import { setContext } from 'apollo-link-context';
function c(store) {
    const httpLink = new HttpLink({
        uri: 'http://localhost:3000/graphql'
    })

    const authLink = setContext((_, { headers }) => {
        const state = store.getState()
        const token = state.auth.token
        
      console.log(state)
        return {
            headers: {
                ...headers,
                authorization: token ? `${token}` : "",
            }
        }
    })

    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    })

    return client
}

export default c
