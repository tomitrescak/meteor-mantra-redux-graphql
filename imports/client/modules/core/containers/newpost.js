import NewPost from "../components/newpost";
import { useDeps, composeAll } from "mantra-core";
import { connect } from 'react-apollo';
const generateMutationObject = (title, content) => {
    return {
        mutation: gql `
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
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        create: (title, content, mutation) => {
            dispatch(ownProps.createAction(title, content, mutation));
        }
    };
};
const mapStateToProps = (state) => {
    return {
        error: state.post.error
    };
};
const depsToPropsMapper = (context, actions) => {
    return {
        createAction: actions.posts.create
    };
};
export default composeAll(connect({ mapMutationsToProps, mapDispatchToProps, mapStateToProps }), useDeps(depsToPropsMapper))(NewPost);
// export default (NewPost);
