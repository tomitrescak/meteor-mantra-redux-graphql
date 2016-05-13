import * as Collections from '../../lib/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';

declare global {
  export interface IContainerContext {
    (): IContext;
  }
  export interface IContext {
    Meteor?: typeof Meteor | any;
    FlowRouter?: typeof FlowRouter | any;
    Collections?: any;
    LocalState?: ReactiveDict | any;
    Tracker?: typeof Tracker | any;
  }
}

export default function () {
  return {
    Meteor,
    FlowRouter,
    Collections,
    LocalState: new ReactiveDict(),
    Tracker
  };
}
