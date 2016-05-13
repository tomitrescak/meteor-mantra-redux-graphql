import Post from '../components/post';
import { useDeps, compose, composeAll } from 'mantra-core';
import apolloContainer from './apollo';
import { connect } from 'react-apollo';
function mapQueriesToProps({ ownProps, state }) {
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
}
;
export default composeAll(compose(apolloContainer()), connect({ mapQueriesToProps }), useDeps() // -> not needed here
)(Post);
