/* tslint:disable */
declare module "meteor/mongo" {
  export module Mongo {
    interface Collection<T> {
      attachSchema(schema : any) : void;
    }
  }
}

declare module "meteor/aldeed:simple-schema" {
  export class SimpleSchema {
    constructor(schema : any);
  }
}
