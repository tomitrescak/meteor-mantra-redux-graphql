var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
import { Meteor } from 'meteor/meteor';
import { Posts, Comments } from '../collections';
var bound = Meteor.bindEnvironment(function (callback) {
    callback();
});
const resolvers = {
    Query: {
        posts(root, args) {
            return __awaiter(this, void 0, void 0, function* () {
                return Posts.find({}).fetch();
            });
        },
        post(root, { id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return Posts.findOne(id);
            });
        },
        comments(root, { postId }) {
            return __awaiter(this, void 0, void 0, function* () {
                return Comments.find({ postId: postId }).fetch();
            });
        },
    },
    Mutation: {
        addPost(root, { title, content }) {
            return __awaiter(this, void 0, void 0, function* () {
                let asyncCall = Meteor.bindEnvironment(function () {
                    Posts.insert({ title: title, content: content });
                    return Posts.find({}).fetch();
                });
                return asyncCall();
            });
        },
        addComment(root, { postId, comment }) {
            return __awaiter(this, void 0, void 0, function* () {
                const id = Comments.insert({ postId: postId, text: comment, createdAt: new Date().getTime() });
                return Posts.findOne(id);
            });
        }
    }
};
export default resolvers;
