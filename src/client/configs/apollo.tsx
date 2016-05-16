import * as React from 'react';
import { Meteor } from 'meteor/meteor';
import { useDeps } from 'mantra-core';

// apollo

import ApolloClient, { createNetworkInterface }  from 'apollo-client';
import { registerGqlTag } from 'apollo-client/gql';

// init accounts

import { Accounts } from 'meteor/accounts-base';

const networkInterface = createNetworkInterface('/graphql');

networkInterface.use([{
  applyMiddleware(request: any, next: Function) {
    const currentUserToken = Accounts._storedLoginToken();

    if (!currentUserToken) {
      next();
      return;
    }

    if (!request.options.headers) {
      request.options.headers = new Headers();
    }

    request.options.headers.Authorization = currentUserToken;

    next();
  }
}]);

// init apollo

export const apolloClient = new ApolloClient({networkInterface});

Meteor.startup(() => {
  registerGqlTag();
});
