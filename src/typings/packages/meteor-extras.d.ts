// declare class ReactiveDict {
//   get(key: string): any;
//   set(key: string, value: any): void;
// }
//
// declare module 'react-mixin' {
//   const ReactMixin: any;
//   export default ReactMixin;
// }

declare module 'meteor/meteor' {
  export module Meteor {
    export function uuid(): string;
  }
}


declare module 'meteor/accounts-base' {
  export module Accounts {
    export function _storedLoginToken(): string;
  }
}

declare module 'meteor/std:accounts-ui' {
  export var Accounts: any;
}

declare var Headers: any;
