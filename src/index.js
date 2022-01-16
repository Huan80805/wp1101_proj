import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  ApolloClient, InMemoryCache, ApolloProvider, HttpLink,
} from '@apollo/client';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';


const port = process.env.PORT ;
// Create an http link:
const httpLink = new HttpLink({
  uri: `http://localhost:${port}/`
})

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: `ws://localhost:${port}/`,
  options: { reconnect: true }
})

const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink
)

const client = new ApolloClient({
  link,
  cache: new InMemoryCache().restore({})
})


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
