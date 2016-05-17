import React from 'react';
import Navigation from './navigation';

import { ApolloProvider } from 'meteor/tomi:apollo-redux-tools';
import { Accounts } from 'meteor/std:accounts-ui';

const styles = {
  main: {
    display: 'table',
    width: '100%'
  },
  cell: {
    display: 'table-cell',
    width: '50%'
  }
}

const Layout = ({content = (): any => null }) => (
  <ApolloProvider>
    <div>
      <header>
        <h1>Mantra Voice</h1>
        <Navigation />
      </header>

      <main style={styles.main}>
        <div style={styles.cell}>
          {content() }
        </div>
        <div style={styles.cell}><Accounts.ui.LoginForm /></div>
      </main>

      <footer>
        <small>Built with <a href='https://github.com/kadirahq/mantra'>Mantra</a> &amp; Meteor.</small>
      </footer>
    </div>
  </ApolloProvider>
);

export default Layout;
