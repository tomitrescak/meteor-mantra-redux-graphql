import * as React from "react";

declare global {
  export interface IMutation {
    (...params: any[]): Promise<any>
  }

  export interface IMutations {
    removePostMutation(id: string): void;
  }

  export interface IGraphqlQuery {
    data: {
      query: any,
      forceFetch: boolean,
      variables?: Object
    };
  }

  export interface IDispatch {
    (action: any): void;
  }
}
