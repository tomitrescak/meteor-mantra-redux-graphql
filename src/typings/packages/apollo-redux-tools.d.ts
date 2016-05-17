declare module 'meteor/tomi:apollo-redux-tools' {
  export interface IState {
    dispatch: (...params: any[]) => Promise<any>;
    apollo?: {
      data: any;
      mutations: any;
      queries: any;
    };
  }

  export interface IMantraRedux {
    app: any;
    modules: any[];
    store: any;
    context: any;
    assignContext(context: any): void;
    loadModule(moduleDefinition: any): void;
    init(): void;
  }

  export class ApolloProvider extends React.Component<{},{}> { }
  export let mantraRedux: IMantraRedux;
  export function connect(...params: any[]): (elem: any) => void;
  export function createApp(context: any): IMantraRedux;

  // server

  interface ServerProps {
    schema: any;
    resolvers?: Object;
    port?: number;
  }

  export function addQueries(queries: Object): Object;
  export function addMutations(mutations: Object): Object;
  export function initServer(serverProps: ServerProps): any;
  export function addAsyncResolvers(key: string, obj: Object): Object
  export function addResolvers(key: string, obj: Object): Object
}
