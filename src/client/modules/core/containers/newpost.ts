import NewPost, { IComponentProps, IComponentActions} from "../components/newpost";
import {useDeps, composeWithTracker, composeAll, IKomposer, IKomposerData, IDepsMapper} from "mantra-core";

import { connect } from 'react-apollo';

import { createPost } from "../actions/posts";

const generateMutationObject = (title: string, content: string) => {
  return {
    mutation: gql`
    mutation addPost($title: String, $content: String) {
       addPost(title: $title, content: $content) {
         title
       }
    }`,
    variables: {
      title,
      content
    }
  };
};

const mapMutationsToProps = () => {
  return {
    addPost: generateMutationObject
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    create: (title: string, content: string, mutation: any) => {
        dispatch(createPost(title, content, mutation));
    }
  };
};

const mapStateToProps = (state: IState) => {
  return {
    error: state.post.error,
  };
};

export default connect({mapMutationsToProps, mapDispatchToProps, mapStateToProps})(NewPost);
