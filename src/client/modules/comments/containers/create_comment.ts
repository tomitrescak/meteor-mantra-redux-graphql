import {
  useDeps, composeWithTracker, composeAll, IKomposer, IKomposerData
} from 'mantra-core';
import Component, { IComponentProps, IComponentActions } from '../components/create_comment';

interface IProps {
  context?: any;
  clearErrors?: Function;
  postId?: string;
}


const mapMutationsToProps = ({ ownProps }: IReduxProps) => {
  return {
    addPost: (comment: string) => {
      return {
        mutation: gql`
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

const mapQueriesToProps = ({ ownProps }: IReduxProps): IGraphqlQuery  => {
  return {
    data: {
      query: gql`
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

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    create: (title: string, content: string, mutation: any) => {
        dispatch(ownProps.create(title, content, mutation));
    }
  };
};

const mapStateToProps = (state: IState) => {
  return {
    error: state.post.error
  };
};

export const mapDepsToProps = (context: IContext, actions: { comments: IComponentActions }) => ({
  create: actions.comments.create,
  clearErrors: actions.comments.clearErrors,
  context: () => context
});

export default composeAll<IProps>(
  useDeps(mapDepsToProps)
)(Component);
