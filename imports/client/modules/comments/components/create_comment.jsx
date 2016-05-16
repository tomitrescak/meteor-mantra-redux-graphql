import * as React from 'react';
class CreateComment extends React.Component {
    render() {
        const { error } = this.props;
        return (<div>
        {error ? this._renderError(error) : null}
        <textarea ref={(node) => this.comment = node} placeholder="Enter your comment here.">

        </textarea>
        <br />
        <button onClick={this._create.bind(this)}>Add Comment</button>
      </div>);
    }
    _create() {
        const { create, postId } = this.props;
        create(postId, this.comment.value, this.props.mutations.createComment, this.props.refetch);
        this.comment.value = '';
    }
    _renderError(error) {
        return (<div className="error">
        {error}
      </div>);
    }
}
export default CreateComment;
