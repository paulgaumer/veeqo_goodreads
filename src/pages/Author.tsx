import React, { useEffect, useContext } from "react"
import { useParams } from 'react-router-dom';
import { ContextStore } from "../context/store"
import { getAuthorInfo } from "../api/requests"
import AuthorHero from "../components/hero/AuthorHero"
import AuthorDescription from "../components/descriptions/AuthorDescription"
import AuthorBooksList from "../components/books/AuthorBooksList"
import Loading from "../components/loading/Loading";


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
    <>
      {!author &&
        <div className="mt-20">
          <Loading />
        </div>
      }
      {author &&
        <div>
          <section data-name="author-hero">
            <AuthorHero author={author} />
          </section>
          <section data-name="author-description" className="pt-20">
            <AuthorDescription content={author.about} />
          </section>
          <section data-name="author-books" className="pt-20">
            <AuthorBooksList author={author} />
          </section>
        </div>
      }
    </>
  );
}

export default Author