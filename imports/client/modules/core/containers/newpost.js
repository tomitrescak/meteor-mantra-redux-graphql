import NewPost from "../components/newpost";
import { connect } from 'react-apollo';
import { createPost } from "../actions/posts";
const generateMutationObject = (title, content) => {
    return {
        mutation: gql `
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
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        create: (title, content, mutation) => {
            dispatch(createPost(dispatch, title, content, mutation));
        }
    };
};
const mapStateToProps = (state) => {
    return {
        error: state.post.error,
    };
};
export default connect({ mapMutationsToProps, mapDispatchToProps, mapStateToProps })(NewPost);
