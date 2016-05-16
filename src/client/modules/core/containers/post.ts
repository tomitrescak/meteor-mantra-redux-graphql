import Post, { IComponentProps } from '../components/post';
import {useDeps, compose, composeAll} from 'mantra-core';
import apolloContainer, { createMutation } from './apollo';
import { connect } from 'react-apollo';

interface IProps {
  postId: string;
  context?: () => IContext;
  removePost?: (id: string, mutation: IMutation) => void;
}

const mapQueriesToProps = ({ ownProps }: any) => {
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

const mapMutationsToProps = (p: any) => ({
  removePostMutation: (id: string) => {
    return createMutation(`
      mutation removePost($id: String) {
         removePost(id: $id)
      }`, { id });
  }
});

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IProps) => ({
  removePost: (mutation: any) => {
    dispatch(ownProps.removePost(ownProps.postId, mutation));
  },
});

const depsToPropsMapper = (context: IContext, actions: IActions) => ({
  removePost: actions.posts.remove
});

export default composeAll<IProps>(
  compose(apolloContainer()),
  connect({ mapQueriesToProps, mapMutationsToProps, mapDispatchToProps }),
  useDeps(depsToPropsMapper) // -> not needed here
)(Post);
