declare module "apollo-client" {
  export var Document: any;
  export var GraphQLResult: any;
  export var SelectionSet: any;
  export var GraphQLError: any;
  export var ApolloClient: any;
  export default ApolloClient;
}

declare var gql: any;

declare module "react-apollo" {
  export var ApolloProvider: any;
  export var connect: any;
}

declare module "apollo-client/gql" {
  export var registerGqlTag: any;
}

declare module "graphql-tools" {
  export var apolloServer: any;
}

declare module "express" {
  let express: any;
  export default express;
}

declare module "http-proxy-middleware" {
 let proxyMiddleware: any;
 export default proxyMiddleware;
}

declare module "redux-thunk" {
  let thunk: any;
  export default thunk;
}

declare module "redux-logger" {
  let logger: any;
  export default logger;
}
