// resolvers have to implemented for now in Javascript as TS is incorrectly transpiling async operator

// import { Meteor } from 'meteor/meteor';
// import { Posts, Comments } from '../collections';
// import * as Schema from './schema';
//
// var bound = Meteor.bindEnvironment(function(callback) {
//   callback()
// });
//
// const resolvers = {
//   Query: {
//     async posts(root: any, args: any) {
//       return Posts.find({}).fetch();
//     },
//     async post(root: any, { id }: any) {
//       return Posts.findOne(id);
//     },
//     async comments(root: any, { postId }: any) {
//       return Comments.find({ postId: postId }).fetch();
//     },
//   },
//   Mutation: {
//     async addPost(root, { title, content }) {
//       const post = Posts.insert({ title: title, content: content });
//       return [post];
//     },
//     async addComment(root: any, { postId, comment }: Schema.AddCommentParams) {
//       const id = Comments.insert({ postId: postId, text: comment, createdAt: new Date().getTime() });
//       return Posts.findOne(id);
//     }
//   }
// };
//
// export default resolvers;
