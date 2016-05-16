import React from 'react';
import CommentList from '../../comments/containers/comment_list';
const Post = ({ post, removePost, mutations }) => (<div>
    {post.saving ? <p>Saving...</p> : null}
    <h2>{post.title}</h2>
    <p>
      {post.content}
    </p>
    <div>
      <h4>Comments</h4>
      <CommentList postId={post._id}/>
    </div>
    <div><button onClick={() => removePost(mutations.removePostMutation)}>Delete</button></div>
  </div>);
export default Post;
