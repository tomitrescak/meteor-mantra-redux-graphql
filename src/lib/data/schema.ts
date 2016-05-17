export interface AddPostParams {
  title: string;
  content: string;
}

export interface AddCommentParams {
  postId: string;
  comment: string;
}

const schema = [ `
  type Post {
    _id: String,
    title: String,
    saving: Boolean, 
    content: String
  }

  type Comment {
    _id: String,
    postId: String,
    createdAt: Float,
    author: String,
    text: String,
    saving: Boolean
  }

  type Query {
    posts: [Post],
    post(id: String): Post
    comments(postId: String): [Comment]
  }

  type Mutation {
    addPost(title: String, content: String): String,
    removePost(id: String): Boolean,
    addComment(postId: String, comment: String): Boolean
  }

  schema {
    query: Query,
    mutation: Mutation
  }
` ];


export default schema;
