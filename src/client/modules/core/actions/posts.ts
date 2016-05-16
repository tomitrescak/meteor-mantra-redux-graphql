import { FlowRouter } from 'meteor/kadira:flow-router';

export function clearErrors() {
  return {
    type: 'CLEAR_ERRORS'
  };
}

function createPostOptimistic(error: string) {
  return {
    type: 'ADD_ERROR',
    error
  };
}

export function create(title: string, content: string, flowRouter: typeof FlowRouter, mutation: any): any {

  return function(dispatch: any) {
    if (!title || !content) {
      dispatch(createPostOptimistic('Title & Content are required!'));
      return;
    }

    mutation(title, content).then((result: any) => {
      if (result.errors && result.errors.length) {
        return dispatch(createPostOptimistic(result.errors[0].message));
      }
      // if (action.refetch) {
      //   action.refetch();
      // }
      flowRouter.go('/');
    });
  };

  // const id = Meteor.uuid(); => No support yet
}
