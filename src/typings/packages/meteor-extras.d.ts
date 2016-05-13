// declare class ReactiveDict {
//   get(key: string): any;
//   set(key: string, value: any): void;
// }
//
// declare module "react-mixin" {
//   const ReactMixin: any;
//   export default ReactMixin;
// }

declare module "meteor/meteor" {
  export module Meteor {
    export function uuid(): string;
  }
}
