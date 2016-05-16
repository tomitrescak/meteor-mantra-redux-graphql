import { Meteor } from 'meteor/meteor';
import ApolloClient from 'apollo-client';
import { registerGqlTag } from 'apollo-client/gql';
export const apolloClient = new ApolloClient();
Meteor.startup(() => {
    registerGqlTag();
});
