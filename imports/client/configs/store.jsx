import * as React from "react";
import { registerGqlTag } from 'apollo-client/gql';
import { Meteor } from 'meteor/meteor';
import context from './context';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import postReducer from '../modules/core/reducers/post';
// prepare apollo
const client = new ApolloClient();
// prepare store
// prepare middlewares
const middleware = [client.middleware(), ReduxThunk];
if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    middleware.push(logger);
}
// we store the mantra-type context in the global state in order to have it accessible
const ctx = context();
function globalContext(state = ctx) {
    return ctx;
}
;
const store = createStore(combineReducers({
    post: postReducer,
    context: globalContext,
    apollo: client.reducer(),
}), {}, applyMiddleware(...middleware));
// hot reload for reducers
// if (module['hot']) {
//     // Enable Webpack hot module replacement for reducers
//     module['hot'].accept('../reducers', () => {
//       const nextReducer = require('../reducers').default;
//       store.replaceReducer(nextReducer);
//     });
//   }
// register tag for graphql
Meteor.startup(() => {
    registerGqlTag();
});
// export root element
const Root = ({ children }) => (<ApolloProvider client={client} store={store}>
    {children}
  </ApolloProvider>);
export default Root;
