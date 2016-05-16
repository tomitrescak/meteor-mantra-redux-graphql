import Post from '../components/post';
import { useDeps, compose, composeAll } from 'mantra-core';
import apolloContainer, { createMutation } from './apollo';
import { connect } from 'react-apollo';
const mapQueriesToProps = ({ ownProps }) => {
    return {
        data: {
            query: gql `
        query post($postId: String) {
          post(id: $postId) {
            _id
            title
            content
          }
        }
        `,
            variables: {
                postId: ownProps.postId
            },
            forceFetch: true
        }
    };
};
const mapMutationsToProps = (p) => ({
    removePostMutation: (id) => {
        return createMutation(`
      mutation removePost($id: String) {
         removePost(id: $id)
      }`, { id });
    }
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    removePost: (mutation) => {
        dispatch(ownProps.removePost(ownProps.postId, mutation));
    },
});
const depsToPropsMapper = (context, actions) => ({
    removePost: actions.posts.remove
});
export default composeAll(compose(apolloContainer()), connect({ mapQueriesToProps, mapMutationsToProps, mapDispatchToProps }), useDeps(depsToPropsMapper) // -> not needed here
)(Post);
