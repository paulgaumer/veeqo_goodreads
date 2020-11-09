import React, { useEffect, useContext } from "react"
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion"
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
    <div data-test="author-page">
      {!author &&
        <div className="mt-20">
          <Loading />
        </div>
      }
      {author &&
        <div>
          <motion.section
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            data-name="author-hero">
            <AuthorHero author={author} />
          </motion.section>
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.2 },
            }}
            data-name="author-description"
            className="pt-20">
            <AuthorDescription content={author.about} />
          </motion.section>
          <section data-name="author-books" className="pt-20">
            <AuthorBooksList author={author} />
          </section>
        </div>
      }
    </div>
  );
}

export default Author