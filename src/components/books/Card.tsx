import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import { format } from 'date-fns'
import { IBook } from "../../types/book"
import changeImageSize from "../../utils/changeImageSize"

interface IProps {
  book: IBook
}

interface IImageProps {
  img: string
  alt: string
}

const Image = styled.div<IImageProps>`
  height: 250px;
  width: 170px;
  background-image: url(${p => p.img});
  background-size: cover;
  background-position: top;
`

const Card = ({ book }: IProps) => {
  const img = changeImageSize(book.image)
  const date = format(new Date(book.publicationDate.month, book.publicationDate.day, book.publicationDate.year), 'PP')
  const getRatingColor = () => {
    if (book.rating >= 4) {
      return "bg-orange-500"
    } else {
      return "bg-orange-400"
    }
  }

  return (
    <div className="relative flex justify-between space-x-6 border border-gray-200 rounded-lg hover:shadow-md">
      <Image img={img} alt={book.title} className="flex-shrink-0 rounded-lg" />
      <div className={`absolute top-0 z-20 w-20 px-2 py-1 text-white rounded-tl-lg rounded-br-lg -left-6 ${getRatingColor()}`}>
        <p className="flex items-center space-x-1 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span>{book.rating}</span>
        </p>
      </div>
      <div className="flex flex-col items-start justify-between py-6 pr-2">
        <div className="flex flex-col space-y-2">
          <h3 className="">{book.title}</h3>
          <Link to={`/authors/${book.author.id}`} className="font-light text-gray-600 hover:underline"><p>- {book.author.name}</p></Link>
          <p className="text-sm italic font-light text-gray-500">Published: {date}</p>
        </div>
        <span className="inline-flex rounded-md shadow-sm">
          <Link to={`/authors/${book.author.id}`} className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-gray-900 transition ease-in-out duration-150">
            More info
        </Link>
        </span>
      </div>
    </div>
  )
}

export default Card
