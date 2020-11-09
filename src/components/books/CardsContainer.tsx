import React, { useContext } from 'react'
import Card from "./Card"
import { motion } from "framer-motion"
import { ContextStore } from "../../context/store"
import Pagination from "../pagination/Pagination"
import { formatNumber } from "../../utils/formatNumber"
import { IBook } from "../../types/book"
import Info from '../../assets/icons/Info'

const CardsGrid = () => {
  const { state, dispatch } = useContext(ContextStore)
  const { bookSearch, api, firstInit } = state
  const { search, books } = bookSearch

  const handleAuthorClick = () => {
    /**
     * Reset the author data stored into context when clicking an author link
     */
    dispatch({
      type: "SET_AUTHOR",
      payload: null
    })
  }

  return (
    <div>
      { !firstInit &&
        <div id="pagination-top" className="flex flex-col items-start justify-between pb-4 mb-12 border-b border-gray-200 md:mb-20 sm:items-center sm:flex-row">
          <div className="flex items-center pb-3 sm:pb-0">
            <p className="pr-3 font-bold text-gray-900">{formatNumber(search.totalResults)} {search.totalResults > 1 ? "Results" : "Result"}</p>
            <p className="px-3 text-sm text-gray-600 border-l-2 border-gray-200">Page {search.activePage} / {search.totalPages}</p>
          </div>
          {search.type !== "isbn" &&
            <Pagination search={search} position="top" />
          }
        </div>

      }
      { api.status === 200 &&
        <>
          <ul className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
            {books.map((book: IBook, i) => {
              return (
                <motion.li
                  key={book.id}
                  variants={{
                    hidden: i => ({
                      opacity: 0,
                      y: -50 * i,
                    }),
                    visible: i => ({
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: i * 0.03,
                      },
                    }),
                  }}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                >
                  <Card book={book} handleAuthorClick={handleAuthorClick} />
                </motion.li>
              )
            })}
          </ul>
          <div className="flex justify-center mt-20">
            <Pagination search={search} position="bottom" />
          </div>
        </>
      }
      {api.status === 500 &&
        <div data-test="search-error" className="flex items-center justify-center">
          <p className="flex items-center space-x-1">
            <Info width="w-5" height="w-5" color="text-gray-700" />
            <span>We could not find any match for "<span className="italic">{search.keyword}</span>"</span>
          </p>
        </div>
      }
    </div>
  )
}

export default CardsGrid
