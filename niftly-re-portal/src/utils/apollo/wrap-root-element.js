import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './apollo-client';
import { LoginProvider } from '../../state/login-state';

export const WrapRootElement = ({ element }) => (
  <ApolloProvider client={client}><LoginProvider>{element}</LoginProvider></ApolloProvider>
);