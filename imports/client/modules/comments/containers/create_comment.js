import { useDeps, composeAll } from 'mantra-core';
import Component from '../components/create_comment';
import { connect } from 'react-apollo';
const mapMutationsToProps = ({ ownProps }) => {
    return {
        createComment: (postId, comment) => {
            return {
                mutation: gql `
        mutation addComment($postId: String, $comment: String) {
           addComment(postId: $postId, comment: $comment)
        }`,
                variables: {
                    postId: postId,
                    comment
                }
            };
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
    clearErrors: actions.general.clearErrors,
    context: () => context
});
export default composeAll(connect({ mapMutationsToProps, mapStateToProps }), useDeps(mapDepsToProps))(Component);
