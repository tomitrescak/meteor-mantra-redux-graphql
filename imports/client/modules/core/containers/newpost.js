import NewPost from "../components/newpost";
import { useDeps, composeAll } from "mantra-core";
import { connect } from 'react-apollo';
import { create } from "../actions/posts";
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
            dispatch(create(title, content, ownProps.flowRouter, mutation));
        }
    };
};
const mapStateToProps = (state) => {
    return {
        error: state.post.error
    };
};
const depsToPropsMapper = (context, actions) => ({
    flowRouter: context.FlowRouter
});
export default composeAll(connect({ mapMutationsToProps, mapDispatchToProps, mapStateToProps }), useDeps(depsToPropsMapper) // -> not needed here
)(NewPost);
// export default (NewPost);
