import React from "react"
import BlogPosts from "../data/BlogPosts"
import { Link } from 'react-router-dom';

function PostsLists() {
  return (
    <ul>
      {Object.entries(BlogPosts).map(([slug, { title }]) => (
        <li key={slug}>
          <Link to={`/posts/${slug}`}>
            <h3>{title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default PostsLists