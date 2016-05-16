import React from 'react';
import CommentList from '../../comments/containers/comment_list';

import { IPosts } from '../../../../lib/collections';

export interface IComponentProps {
  post?: IPosts;
  remove: (mutation: any) => null;
  mutations: IMutations;
}

const Post = ({post, remove, mutations}: IComponentProps) => (
  <div>
    {post.saving ? <p>Saving...</p> : null}
    <h2>{post.title}</h2>
    <p>
      {post.content}
    </p>
    <div>
      <h4>Comments</h4>

    </div>
    <div><button onClick={() => remove(mutations.removePost)}>Delete</button></div>
  </div>
);

export default Post;

// <CommentList postId={post._id}/>
