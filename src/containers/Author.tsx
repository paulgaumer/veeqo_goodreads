import React, { useEffect, useContext } from "react"
import { useParams } from 'react-router-dom';
import { ContextStore } from "../context/store"
import { getAuthorInfo } from "../api/requests"

function Author() {

  const { id } = useParams();
  const { state, dispatch } = useContext(ContextStore)
  const { author } = state

  useEffect(() => {
    const setAuthor = async () => {
      dispatch({
        type: "SET_AUTHOR",
        payload: await getAuthorInfo(id)
      })
    }
    setAuthor()
  }, [id, dispatch])


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