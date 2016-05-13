const schema = [`
  type Post {
    _id: String,
    title: String,
    saving: Boolean,
    content: String
  }

  type Comment {
    _id: String,
    postId: String,
    createdAt: Int,
    author: String,
    text: String,
    saving: Boolean
  }

  type Query {
    posts: [Post],
    post(id: String): Post
    comments: [Comment]
  }

  type Mutation {
    addPost(title: String, content: String): [Post],
    addComment(postId: String, comment: String): [Comment]
  }

  schema {
    query: Query,
    mutation: Mutation
  }
`];
export default schema;
