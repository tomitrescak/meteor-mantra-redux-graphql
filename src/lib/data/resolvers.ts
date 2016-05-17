import { Posts, Comments } from '../collections';
import { addQueries, addMutations } from 'meteor/tomi:apollo-redux-tools';

const queries = {
  posts() {
    return Posts.find({}).fetch();
  },
  post(root: any, { id }: any) {
    return Posts.findOne(id);
  },
  comments(root: any, { postId }: any) {
    return Comments.find({ postId }).fetch();
  }
};

addQueries(queries);

const mutations = {
  addPost(root: any, { title, content }: any) {
    const postId = Posts.insert({ title, content });
    return postId;
  },
  removePost(root: any, { id }: any) {
    Posts.remove(id);
    return true;
  },
  addComment(root: any, { postId, comment }: any, context: any) {
    console.log("adding: " + context);
    const id = Comments.insert({ postId: postId, text: comment, createdAt: new Date().getTime(), author: context.user._id });
    return Posts.findOne(id);
  }
};

addMutations(mutations);
