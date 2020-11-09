import React from 'react'
import Card from "./Card"
import Pagination from "../pagination/Pagination"
import { formatNumber } from "../../utils/formatNumber"
import { IBook } from "../../types/book"
import Info from '../../assets/icons/Info'

interface IProps {
  books: IBook[]
  search: {
    totalResults: number,
    activePage: number,
    keyword: string,
    type: "title" | "author" | "isbn",
    totalPages: number
  },
  api: {
    status: number
  }
}

const CardsGrid = ({ books, search, api }: IProps) => {
  return (
    <div>
      <div className="flex items-center justify-between pb-4 mb-20 border-b border-gray-200">
        <div className="flex items-center">
          <p className="pr-3 font-bold text-gray-900">{formatNumber(search.totalResults)} {search.totalResults > 1 ? "Results" : "Result"}</p>
          <p className="px-3 text-sm text-gray-600 border-l-2 border-gray-200">Page {search.activePage} / {search.totalPages}</p>
        </div>
        {search.type !== "isbn" &&
          <Pagination search={search} />
        }
      </div>
      { api.status === 200 &&
        <>
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
        </>
      }
      {api.status === 500 &&
        <div className="flex items-center justify-center">
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
