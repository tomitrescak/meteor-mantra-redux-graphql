import React from 'react';
import Navigation from './navigation';
import ApolloProvider from "../../../configs/store";
const Layout = ({ content = () => null }) => (<ApolloProvider>
    <div>
      <header>
      <h1>Mantra Voice</h1>
      <Navigation />
      </header>

      <div>
      {content()}
      </div>

      <footer>
      <small>Built with <a href='https://github.com/kadirahq/mantra'>Mantra</a> &amp; Meteor.</small>
      </footer>
    </div>
  </ApolloProvider>);
export default Layout;
