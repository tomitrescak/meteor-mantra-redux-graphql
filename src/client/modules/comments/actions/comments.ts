import actions from '../../core/actions/general';

export function create({ Store }: IContext, postId: string, text: string, mutation: IMutation, refetch: any): any {
  if (!text) {
    return actions.showError({ Store }, 'Comment text is required.!');
  }

  if (!postId) {
    return actions.showError({ Store }, 'postId is required');
  }

  actions.clearErrors({ Store });

  // const id = Meteor.uuid(); -> not yet
  // debugger;
  return mutation(postId, text).then(actions.checkResult(Store.dispatch)).then(() => {
    if (refetch) {
      return refetch();
    }
  });

}

export default {
  create({ Store }: IContext, postId: string, comment: string, mutation: IMutation, refetch: any) {
    Store.dispatch(() => create({ Store }, postId, comment, mutation, refetch));
  }
};
