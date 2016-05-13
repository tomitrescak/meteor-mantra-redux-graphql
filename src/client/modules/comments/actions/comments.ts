export default {
  create({Meteor, LocalState}: any, postId: string, text: string) {
    if (!text) {
      return LocalState.set('CREATE_COMMENT_ERROR', 'Comment text is required.');
    }

    if (!postId) {
      return LocalState.set('CREATE_COMMENT_ERROR', 'postId is required.');
    }

    LocalState.set('CREATE_COMMENT_ERROR', null);

    const id = Meteor.uuid();
    Meteor.call('posts.createComment', id, postId, text, (err: { message: string}) => {
      if (err) {
        return LocalState.set('CREATE_COMMENT_ERROR', err.message);
      }
    });
  },

  clearErrors({LocalState}: IContext) {
    return LocalState.set('CREATE_COMMENT_ERROR', null);
  }
};
