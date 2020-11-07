import React from 'react'
import Card from "./Card"
import { IBook } from "../../types/book"

interface IProps {
  books: IBook[]
}

const CardsGrid = ({ books }: IProps) => {
  return (
    <ul className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
      {books.map((book: IBook) => {
        return <li key={book.id}>
          <Card book={book} />
        </li>
      })}
    </ul>
  )
}

export default CardsGrid
