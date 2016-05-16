import { compose, composeAll } from 'mantra-core';
import Component from '../components/comment_list';
import apolloContainer from '../../core/containers/apollo';
import { connect } from 'react-apollo';
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
export default composeAll(compose(apolloContainer()), connect({ mapQueriesToProps }))(Component);
