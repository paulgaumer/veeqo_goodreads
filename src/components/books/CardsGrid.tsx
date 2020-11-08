import React from 'react'
import Card from "./Card"
import Pagination from "../pagination/Pagination"
import { IBook } from "../../types/book"

interface IProps {
  books: IBook[]
  search: {
    totalResults: number,
    activePage: number,
    keyword: string,
    type: "title" | "author" | "isbn",
    totalPages: number
  }
}

const CardsGrid = ({ books, search }: IProps) => {
  return (
    <div>
      <div className="flex items-center justify-between pb-4 mb-20 border-b border-gray-200">
        {search.totalResults > 0 &&
          <div className="flex items-center">
            <p className="pr-3 font-bold text-gray-900 border-r-2 border-gray-200">{search.totalResults} Results</p>
            <p className="px-3 text-sm text-gray-600">Page {search.activePage} / {search.totalPages}</p>
          </div>
        }
        <Pagination search={search} />
      </div>
      <ul className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book: IBook) => {
          return <li key={book.id}>
            <Card book={book} />
          </li>
        })}
      </ul>
      <div className="flex justify-center mt-20">
        <Pagination search={search} />
      </div>
    </div>
  )
}

export default CardsGrid
