import * as React from 'react';

import { IPosts } from '../../../../lib/collections';

export interface IComponentProps {
  posts: IPosts[];
}

const PostList = ({posts}: IComponentProps) => (
  <div className='postlist'>
    <ul>
      {posts.map(post => (
        <li key={post._id}>
          <a href={`/post/${post._id}`}>{post.title}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default PostList;
