import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'
import { setContext } from 'apollo-link-context';


import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { apply } from 'async';


function applyWsLink(httpLink) {
    
    const wsLink = new WebSocketLink({
        uri: `ws://localhost:3000/subscriptions`,
        options: {
            reconnect: true
        }
    });

    const link = split(
        // split based on operation type
        ({ query }) => {
            const { kind, operation } = getMainDefinition(query);
            return kind === 'OperationDefinition' && operation === 'subscription';
        },
        wsLink,
        httpLink,
    );

    return link
}
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

    const link = applyWsLink(authLink.concat(httpLink))
    const client = new ApolloClient({
        //link: authLink.concat(httpLink),
        link: link,
        cache: new InMemoryCache()
    })

    return client
}

export default c
