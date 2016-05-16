import { Meteor } from 'meteor/meteor';
import { Posts, Comments } from '../../collections';
import * as Schema from './schema';

const resolvers = {
  Query: {
    async posts(root, args) {
      return Posts.find({}).fetch();
    },
    async post(root, { id }) {
      return Posts.findOne(id);
    },
    async comments(root, { postId }) {
      return Comments.find({ postId }).fetch();
    },
  },
  Mutation: {
    async addPost(root, { title, content }) {
      const postId = Posts.insert({ title, content });
      return postId;
    },
    async removePost(root, { id }) {
      Posts.remove(id);
      return true;
    },
    async addComment(root: any, { postId, comment }) {
      console.log("postId: " + postId);
      console.log("comment: " + comment);
      const id = Comments.insert({ postId: postId, text: comment, createdAt: new Date().getTime() });
      return Posts.findOne(id);
    }
  }
};

export default resolvers;
