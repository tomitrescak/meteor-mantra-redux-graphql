import { compose, composeAll } from 'mantra-core';
import Component, { IComponentProps } from '../components/comment_list';
import apolloContainer from '../../core/containers/apollo';
import { connect } from 'react-apollo';

interface IProps {
  context?: () => IContext;
  clearErrors?: () => void;
  postId: string;
}

interface IReduxProps {
  ownProps: IProps;
  state: IState;
}

const mapQueriesToProps = ({ ownProps }: IReduxProps): IGraphqlQuery  => {
  return {
    data: {
      query: gql`
          query comments($postId: String) {
            comments(postId: $postId) {
             _id,
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


export default composeAll<IProps>(
  compose(apolloContainer()),
  connect({ mapQueriesToProps })
)(Component);
