import React from "react"
import { useParams } from 'react-router-dom';
import AuthorsData from "../data/Authors"

function Author() {
  const { id } = useParams();
  const post = AuthorsData[id];
  const { name, description } = post;
  return (
    <div style={{ padding: 20 }}>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Author