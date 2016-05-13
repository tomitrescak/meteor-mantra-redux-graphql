import * as React from 'react';

export interface IComponentProps {
  error?: string;
  postId?: string;
}

export interface IComponentActions {
  create?: Function;
  clearErrors?: Function;
}

export interface IComponent extends IComponentProps, IComponentActions {}

class CreateComment extends React.Component<IComponent, {}> {
  render() {
    const {error} = this.props;
    return (
      <div>
        {error ? this._renderError(error) : null}
        <textarea ref='text' placeholder='Enter your comment here.'>

        </textarea>
        <br />
        <button onClick={this._create.bind(this)}>Add Comment</button>
      </div>
    );
  }

  _create() {
    const text = this.refs['text']['value'];
    const {create, postId}: IComponent = this.props;
    create(postId, text);
    this.refs['text']['value'] = '';
  }

  _renderError(error: string) {
    return (
      <div className='error'>
        {error}
      </div>
    );
  }
}

export default CreateComment;
