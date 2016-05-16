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

  export interface IActions {
    posts: {
      create(title: string, text: string): void;
      remove(id: string): void;
    };
    general: {
      showError(error: string): void;
      clearErrors(): void;
    };
    comments: {
      create(postId: string, comment: string): void;
    };
  }

  export interface IContext {
    Meteor?: typeof Meteor | any;
    FlowRouter?: typeof FlowRouter | any;
    Collections?: any;
    Store?: IState;
    LocalState?: any; // to remove
  }
}
