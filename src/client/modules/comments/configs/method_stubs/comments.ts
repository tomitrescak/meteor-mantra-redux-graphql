export default function ({Collections, Meteor}: IContext) {
  Meteor.methods({
    'posts.createComment'(_id: string, postId: string, text: string) {
      const saving = true;
      const createdAt = new Date();
      const author = 'Me';
      Collections.Comments.insert({
        _id, postId, text, saving, createdAt, author
      });
    }
  });
}
