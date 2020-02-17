import ApolloClient from 'apollo-boost';
import { fetch } from 'isomorphic-fetch';



export const client = new ApolloClient({
  uri: 'http://localhost:80/graphql',
  request: (operation) => {
    let token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token === undefined ? '' : token}` : ''
      }
    });
  }
});