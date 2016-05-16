import { FlowRouter } from 'meteor/kadira:flow-router';
import generalActions from './general';

export function create({ FlowRouter, Store }: IContext, title: string, content: string, mutation: IMutation) {
  if (!title || !content) {
    generalActions.showError({ Store }, 'Title & Content are required!');
    return;
  }

  mutation(title, content).then((result: any) => {
    if (result.errors && result.errors.length) {
      return generalActions.showError({ Store }, result.errors[0].message);
    }
    FlowRouter.go('/');
  });
}

export function remove({ FlowRouter, Store }: IContext, id: string, mutation: IMutation) {
  mutation(id).then((result: any) => {
    if (result.errors && result.errors.length) {
      return generalActions.showError({ Store }, result.errors[0].message);
    }
    // if (action.refetch) {
    //   action.refetch();
    // }
    FlowRouter.go('/');
  });
}

export default {
  create(context: IContext, title: string, content: string, mutation: IMutation): any {
    context.Store.dispatch(() => create(context, title, content, mutation));
  },

  remove(context: IContext, id: string, mutation: IMutation): any {
    context.Store.dispatch(() => remove(context, id, mutation));
  }
}
