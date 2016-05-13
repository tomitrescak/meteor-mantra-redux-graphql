declare module FlowRouter {
  interface RouteParameters {
    name?: string;
    subscriptions?: Function;
    action?: Function;
    middlewares?: any[];
    triggersEnter?: any[];
    triggersExit?: any[];
  }

  interface Route {
    path: string;
    params: Object;
    queryParams: Object;
    route: { name: string };
  }

  interface GroupParams {
    prefix?: string;
    action?: Function;
    middlewares?: any[];
    subscriptions?: Function;
    triggersEnter?: any[];
    triggersExit?: any[];
  }

  interface Group {
    route(routeUrl: string, routeParameters: FlowRouter.RouteParameters): void;
  }
}

declare module "meteor/kadira:flow-router" {

  interface FlowRouterStatic {
    notFound: FlowRouter.RouteParameters;
    route(routeUrl: string, routeParameters: FlowRouter.RouteParameters): void;
    path(routeName: string, routeParams?: Object, queryParams?: Object): string;
    getParam(paramName: string): string;
    getQueryParam(paramName: string): string;
    go(routeName: string, routeParams?: Object, queryParams?: Object): string;
    setParams(newParams: Object): void;
    setQueryParams(newParams: Object): void;
    getRouteName(): string;
    current(): FlowRouter.Route;
    watchPathChange(): void;
    group(params: FlowRouter.GroupParams): FlowRouter.Group;
    subsReady(subscription?: string): boolean;
    initialize(): any;
  }

  export var FlowRouter: FlowRouterStatic;

  interface BlazeLayoutStatic {
    render(layoutName: string, templates: Object): void;
  }

  export var BlazeLayout: BlazeLayoutStatic;
}
