// declare function require(name:string): void;

declare module "meteor/webpack:blaze-to-react" {
  var something: any;
  export default something;
  export let BlazeToReact: any;
}

declare module "meteor/edgee:slingshot" {
  export var Slingshot: any;
}

declare module "meteor/reactrouter:react-router" {
  let s: any;
  export let ReactRouter: any;
  export let Router: any;
  export let Route: any;
  export let IndexRoute: any;
  export default s;
}

declare module "react-meteor-data" {
  let something: any;
  export default something;
}

declare function If (condition: any): any;
declare function For(each: string, index: string, of: any): any;
declare var Else: any;
