import { FlowRouter } from 'meteor/kadira:flow-router';

function showError(error: string) {
  return {
    type: 'ADD_ERROR',
    error
  };
}

export default {
  clearErrors() {
    return {
      type: 'CLEAR_ERRORS'
    };
  },

  create({ FlowRouter }: IContext, title: string, content: string, mutation: IMutation): any {

    return function(dispatch: any) {
      if (!title || !content) {
        dispatch(showError('Title & Content are required!'));
        return;
      }

      mutation(title, content).then((result: any) => {
        if (result.errors && result.errors.length) {
          return dispatch(showError(result.errors[0].message));
        }
        // if (action.refetch) {
        //   action.refetch();
        // }
        FlowRouter.go('/');
      });
    };

    // const id = Meteor.uuid(); => No support yet
  },

  remove({ FlowRouter }: IContext, id: string, mutation: IMutation): any {

    return (dispatch: any) => {
      mutation(id).then((result: any) => {
        if (result.errors && result.errors.length) {
          return dispatch(showError(result.errors[0].message));
        }
        // if (action.refetch) {
        //   action.refetch();
        // }
        FlowRouter.go('/');
      });
    };

    // const id = Meteor.uuid(); => No support yet
  }
}
