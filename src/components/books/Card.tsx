import React from 'react'
import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { format } from 'date-fns'
import { IBook } from "../../types/book"
import changeImageSize from "../../utils/changeImageSize"
import excerpt from "../../utils/excerpt"
import Star from '../../assets/icons/Star'

interface IProps {
  book: IBook,
  handleAuthorClick: () => void
}

interface IImageProps {
  img: string
  alt: string
}

const Image = styled.div<IImageProps>`
  height: 270px;
  width: 170px;
  background-image: url(${p => p.img});
  background-size: cover;
  background-position: top;
`

const Card = ({ book, handleAuthorClick }: IProps) => {
  const title = excerpt(book.title)
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
    <motion.article
      whileHover={{ scale: 1.03 }}
      data-test="book-card"
      className="relative flex space-x-6 border border-gray-200 rounded-lg hover:shadow-xl">
      <Image img={img} alt={title} className="flex-shrink-0 rounded-lg" />
      <div className={`absolute top-0 z-20 w-20 px-2 py-1 text-white rounded-tl-lg rounded-br-lg -left-6 ${getRatingColor()}`}>
        <p className="flex items-center space-x-1 text-sm">
          <Star width="w-4" height={"h-4"} color="text-white" />
          <span>{book.rating}</span>
        </p>
      </div>
      <div className="flex flex-col items-start justify-between py-6 pr-2">
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl">{title}</h3>
          <Link
            to={`/authors/${book.author.id}`}
            data-test="author-link"
            onClick={handleAuthorClick}
            className="font-light text-gray-600 hover:underline">
            <p>- {book.author.name}</p>
          </Link>
          <p className="text-xs italic font-light text-gray-500">Published: {date}</p>
        </div>
        <span className="inline-flex rounded-md shadow-sm">
          <Link to={`/authors/${book.author.id}`} className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-white bg-teal-800 hover:bg-teal-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-teal-800 transition ease-in-out duration-150">
            More info
        </Link>
        </span>
      </div>
    </motion.article>
  )
}

export default Card
