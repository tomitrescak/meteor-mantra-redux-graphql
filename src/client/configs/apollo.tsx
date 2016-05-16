import * as React from 'react';
import { Meteor } from 'meteor/meteor';
import { useDeps } from 'mantra-core';

// apollo

import ApolloClient from 'apollo-client';
import { registerGqlTag } from 'apollo-client/gql';

export const apolloClient = new ApolloClient();

Meteor.startup(() => {
  registerGqlTag();
});
