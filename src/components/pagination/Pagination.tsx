import React, { useContext } from 'react'
import Pagination from "react-js-pagination";
import PaginationContainer from "./PaginationContainer"
import { ContextStore } from "../../context/store"
import { getBooks } from "../../api/requests"

interface IProps {
  search: {
    totalResults: number,
    activePage: number,
    keyword: string,
    type: "title" | "author" | "isbn"
  }
}

const Pager = ({ search }: IProps) => {
  const { dispatch } = useContext(ContextStore)

  /**
   * Fetch updated books list based on page number
   * @param pageNumber -number
   */
  const handleChange = async (pageNumber: number) => {
    dispatch({
      type: "SET_BOOKS",
      payload: await getBooks(search.keyword, search.type, pageNumber)
    })
    const el: any = document.querySelector("#pagination-top")
    el.scrollIntoView()
  }

  return (
    <PaginationContainer data-name="pagination-container">
      <Pagination
        activePage={search.activePage}
        itemsCountPerPage={20}
        totalItemsCount={search.totalResults}
        pageRangeDisplayed={5}
        onChange={handleChange}
        activeLinkClass={'activeLink'}
      />
    </PaginationContainer>
  )
}

export default Pager
