import * as React from "react";
import { registerGqlTag } from 'apollo-client/gql';
import { Meteor } from 'meteor/meteor';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
// prepare apollo
const client = new ApolloClient();
// prepare store
const middleware = [client.middleware(), ReduxThunk];
if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    middleware.push(logger);
}
const store = createStore(combineReducers({
    apollo: client.reducer(),
}), applyMiddleware(...middleware));
// register tag
Meteor.startup(() => {
    registerGqlTag();
});
// export root element
const Root = ({ children }) => (<ApolloProvider client={client} store={store}>
    {children}
  </ApolloProvider>);
export default Root;
