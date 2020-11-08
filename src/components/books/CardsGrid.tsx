import React from 'react'
import Card from "./Card"
import { IBook } from "../../types/book"

interface IProps {
  books: IBook[]
  totalResults: number | undefined
}

const CardsGrid = ({ books, totalResults }: IProps) => {
  return (
    <div>
      <div >
        {totalResults &&
          <p>{totalResults} Results</p>
        }
      </div>
      <ul className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book: IBook) => {
          return <li key={book.id}>
            <Card book={book} />
          </li>
        })}
      </ul>
    </div>
  )
}

export default CardsGrid
