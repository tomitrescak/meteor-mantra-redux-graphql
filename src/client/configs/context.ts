import * as Collections from '../../lib/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';

declare global {
  export interface IContainerContext {
    (): IContext;
  }

  export interface IState {
    context?: IContext;
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

  export interface IContext {
    Meteor?: typeof Meteor | any;
    FlowRouter?: typeof FlowRouter | any;
    Collections?: any;
  }
}

export default function () {
  return {
    Meteor,
    FlowRouter,
    Collections
  };
}
