import * as React from 'react';

export interface IComponentProps {
  error?: string;
}

export interface IComponentActions {
  create?: (title: string, content: string, mutation: any) => void;
  clearErrors?: Function;
  mutations: any;
}

interface IComponent extends IComponentProps, IComponentActions { }

class NewPost extends React.Component<IComponent, {}> {
  render() {
    const {error} = this.props;
    return (
      <form className="new-post" onSubmit={this.createPost.bind(this)}>
        <h2>Add New Post</h2>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}

        <input ref="titleRef" type="Text" placeholder="Enter your post title." /> <br/>
        <textarea ref="contentRef" placeholder="Enter your post content." /> <br/>
        <button type="submit">Add New</button>
      </form>
    );
  }

  createPost(event: Event) {
    // Becaus the test cannot get event argument
    // so call preventDefault() on undefined cause an error
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    const {create, mutations} = this.props;
    const {titleRef, contentRef} = this.refs;

    create(titleRef['value'], contentRef['value'], mutations.addPost);
  }
}

export default NewPost;
