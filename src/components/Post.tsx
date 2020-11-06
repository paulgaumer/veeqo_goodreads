import React from "react"
import { useParams } from 'react-router-dom';
import BlogPosts from "../data/BlogPosts"

function Post() {
  const { slug } = useParams();
  const post = BlogPosts[slug];
  const { title, description } = post;
  return (
    <div style={{ padding: 20 }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Post