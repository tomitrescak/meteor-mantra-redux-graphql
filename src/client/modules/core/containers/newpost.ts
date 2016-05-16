import NewPost, { IComponentProps, IComponentActions} from "../components/newpost";
import {useDeps, composeWithTracker, composeAll, IKomposer, IKomposerData, IDepsMapper} from "mantra-core";

import { connect } from 'react-apollo';

const generateMutationObject = (title: string, content: string) => {
  return {
    mutation: gql`
    mutation addPost($title: String, $content: String) {
       addPost(title: $title, content: $content)
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
        dispatch(ownProps.createAction(title, content, mutation));
    }
  };
};

const mapStateToProps = (state: IState) => {
  return {
    error: state.post.error
  };
};

const depsToPropsMapper = (context: IContext, actions: IActions) => {
  return {
     createAction: actions.posts.create
  };
};

export default composeAll<{}>(
  connect({mapMutationsToProps, mapDispatchToProps, mapStateToProps}),
  useDeps(depsToPropsMapper)
)(NewPost);

// export default (NewPost);
