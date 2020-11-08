import React from 'react'
import { IAuthor } from "../../types/author"
import Book from "../../assets/icons/Book"
import AuthorBookCard from "../books/AuthorBookCard"

interface IProps {
  author: IAuthor
}

const AuthorBooksList = ({ author }: IProps) => {
  return (
    <div>
      <h3 className="inline-flex pb-2 pr-8 space-x-2 text-2xl border-b border-gray-200">
        <Book color={"text-gray-700"} />
        <span>{author.name}'s books</span>
      </h3>
      <ul className="grid grid-cols-2 mt-10">
        {author.books.map(book => {
          return <li key={book.id}><AuthorBookCard book={book} /></li>
        })}
      </ul>
    </div>
  )
}

export default AuthorBooksList
