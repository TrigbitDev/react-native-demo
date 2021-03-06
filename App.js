import * as React from 'react';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

import Navigation from './routes/Navigation';

const client = new ApolloClient({
  link: new HttpLink({uri: 'https://magnetic-yeti-72.hasura.app/v1/graphql'}),
  cache: new InMemoryCache(),
});
export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Navigation />
      </ApolloProvider>
    );
  }
}
