import { useDeps, composeAll } from 'mantra-core';
import Component from '../components/create_comment';
const mapMutationsToProps = ({ ownProps }) => {
    return {
        addPost: (comment) => {
            return {
                mutation: gql `
        mutation addComment($postId: String, $comment: String) {
           addComment(postId: $postId, comment: $comment)
        }`,
                variables: {
                    postId: ownProps.postId,
                    comment
                }
            };
        }
    };
};
const mapQueriesToProps = ({ ownProps }) => {
    return {
        data: {
            query: gql `
          query comments($postId: String) {
            comments(postId: $postId) {
             createdAt,
             text
           }
          }
        `,
            forceFetch: true,
            variables: {
                postId: ownProps.postId
            }
        }
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        create: (title, content, mutation) => {
            dispatch(ownProps.create(title, content, mutation));
        }
    };
};
const mapStateToProps = (state) => {
    return {
        error: state.post.error
    };
};
export const mapDepsToProps = (context, actions) => ({
    create: actions.comments.create,
    clearErrors: actions.comments.clearErrors,
    context: () => context
});
export default composeAll(useDeps(mapDepsToProps))(Component);
