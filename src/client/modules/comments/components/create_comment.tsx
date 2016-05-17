import * as React from 'react';

export interface IComponentProps {
  error?: string;
  postId?: string;
  mutations?: IMutations;
  refetch?: Function;
}

export interface IComponentActions {
  create?: Function;
  clearErrors?: Function;
}

export interface IComponent extends IComponentProps, IComponentActions {}

class CreateComment extends React.Component<IComponent, {}> {
  comment: HTMLTextAreaElement;

  render() {
    const { error } = this.props;
    return (
      <div>
        {error ? this._renderError(error) : null}
        <textarea ref={ (node) => this.comment = node } placeholder="Enter your comment here.">

        </textarea>
        <br />
        <button onClick={this._create.bind(this)}>Add Comment</button>
      </div>
    );
  }

  _create() {
    const {create, postId}: IComponent = this.props;
    create(postId, this.comment.value, this.props.mutations.createComment, this.props.refetch );
    this.comment.value = '';
  }

  _renderError(error: string) {
    return (
      <div className="error">
        { error }
      </div>
    );
  }
}

export default CreateComment;
