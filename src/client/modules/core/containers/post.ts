import Post, { IComponentProps } from '../components/post';
import {useDeps, compose, composeAll} from 'mantra-core';
import apolloContainer from './apollo';
import { connect } from 'react-apollo';

interface IProps {
  postId: string;
  context?: () => IContext;
}

function mapQueriesToProps({ ownProps, state }: any) {
  return {
    data: {
      query: gql`
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

export default composeAll<IProps>(
  compose(apolloContainer()),
  connect({ mapQueriesToProps }),
  useDeps() // -> not needed here
)(Post);
