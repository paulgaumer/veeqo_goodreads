interface BlogPost {
  title: string
  description: string
}

interface BlogPostsInt {
  [key:string]: BlogPost
}

const BlogPosts: BlogPostsInt = {
  1: {
    title: 'First Blog Post',
    description: 'Lorem ipsum dolor sit amet, consectetur adip.',
  },
  2: {
    title: 'Second Blog Post',
    description: 'Hello React Router v6',
  },
};

export default BlogPosts