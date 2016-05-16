import * as Collections from '../../lib/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';

export default function () {
  return {
    Meteor,
    FlowRouter,
    Collections
  };
}


// global type defintions

declare global {
  export interface IContainerContext {
    (): IContext;
  }

  export interface IState {
    error?: string;
    post?: {
      error: string
    };
    apollo?: {
      data: any;
      mutations: any;
      queries: any;
    };
  }

  export interface IActions {
    posts: {
      create(title: string, text: string): void;
      remove(id: string): void;
    }
  }

  export interface IMutation {
    (...params: any[]): Promise<any>
  }

  export interface IMutations {
    removePostMutation(id: string): void;
  }

  export interface IDispatch {
    (action: any): void;
  }

  export interface IContext {
    Meteor?: typeof Meteor | any;
    FlowRouter?: typeof FlowRouter | any;
    Collections?: any;
    Store?: IState;
    LocalState?: any; // to remove
  }
}
