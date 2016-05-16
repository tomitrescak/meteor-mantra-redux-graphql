import {
  useDeps, composeAll
} from 'mantra-core';
import Component, { IComponentActions } from '../components/create_comment';
import { connect } from 'react-apollo';

interface IProps {
  context?: any;
  clearErrors?: Function;
  postId?: string;
  refetch: any;
}

interface IReduxProps {
  ownProps: IProps;
  state: IState;
}


const mapMutationsToProps = ({ ownProps }: IReduxProps) => {
  return {
    createComment: (postId: string, comment: string) => {
      return {
        mutation: gql`
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

const mapStateToProps = (state: IState) => {
  return {
    error: state.post.error
  };
};

export const mapDepsToProps = (context: IContext, actions: IActions ) => ({
  create: actions.comments.create,
  clearErrors: actions.general.clearErrors,
  context: () => context
});

export default composeAll<IProps>(
  connect({mapMutationsToProps, mapStateToProps}),
  useDeps(mapDepsToProps)
)(Component);
