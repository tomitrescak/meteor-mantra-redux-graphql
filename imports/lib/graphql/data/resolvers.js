import { Posts, Comments } from '../../collections';
import { addAsyncResolvers } from 'meteor-ratools/server';

const queries = {
  async posts() {
    return Posts.find({}).fetch();
  },
  async post(root: any, { id }: any) {
    return Posts.findOne(id);
  },
  async comments(root: any, { postId }: any) {
    return Comments.find({ postId }).fetch();
  }
};

addAsyncResolvers("Query", queries);

const mutations = {
  async addPost(root: any, { title, content }: any) {
    const postId = Posts.insert({ title, content });
    return postId;
  },
  async removePost(root: any, { id }: any) {
    Posts.remove(id);
    return true;
  },
  async addComment(root: any, { postId, comment }: any, context: any) {
    const id = Comments.insert({ postId: postId, text: comment, createdAt: new Date().getTime(), author: context.user._id });
    return Posts.findOne(id);
  }
};

addAsyncResolvers("Mutation", mutations);
