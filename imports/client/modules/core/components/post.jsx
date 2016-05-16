import React from 'react';
const Post = ({ post, remove, mutations }) => (<div>
    {post.saving ? <p>Saving...</p> : null}
    <h2>{post.title}</h2>
    <p>
      {post.content}
    </p>
    <div>
      <h4>Comments</h4>

    </div>
    <div><button onClick={() => remove(mutations.removePost)}>Delete</button></div>
  </div>);
export default Post;
// <CommentList postId={post._id}/>
