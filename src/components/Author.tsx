import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
// import AuthorsData from "../data/Authors"

function Author() {

  const [author, setAuthor] = useState<any>()
  const { id } = useParams();

  useEffect(() => {
    const getAuthorInfo = async (authorId: string) => {
      const res = await fetch(`/.netlify/functions/getAuthorInfo?authorId=${authorId}`);
      const data = await res.json();
      console.log(data)
      setAuthor(data.author);
    }
    getAuthorInfo(id)
  }, [])

  // const post = AuthorsData[id];
  // const { name, description } = post;

  return (
    <div style={{ padding: 20 }}>
      {!author &&
        <p>Loading...</p>
      }
      {author &&
        <div>
          <h3>{author.name}</h3>
          <p>{author.about}</p>
        </div>
      }
    </div>
  );
}

export default Author