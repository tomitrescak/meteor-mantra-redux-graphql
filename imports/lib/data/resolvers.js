import { Posts, Comments } from '../collections';
import { addQueries, addMutations } from 'meteor/tomi:apollo-redux-tools';
const queries = {
    posts() {
        return Posts.find({}).fetch();
    },
    post(root, { id }) {
        return Posts.findOne(id);
    },
    comments(root, { postId }) {
        return Comments.find({ postId }).fetch();
    }
};
addQueries(queries);
const mutations = {
    addPost(root, { title, content }) {
        const postId = Posts.insert({ title, content });
        return postId;
    },
    removePost(root, { id }) {
        Posts.remove(id);
        return true;
    },
    addComment(root, { postId, comment }, context) {
        console.log("adding: " + context);
        const id = Comments.insert({ postId: postId, text: comment, createdAt: new Date().getTime(), author: context.user._id });
        return Posts.findOne(id);
    }
};
addMutations(mutations);
