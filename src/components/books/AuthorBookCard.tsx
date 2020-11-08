import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import tw from "twin.macro"
import changeImageSize from "../../utils/changeImageSize"
import excerpt from "../../utils/excerpt"
import Star from '../../assets/icons/Star'
import BookOpen from '../../assets/icons/BookOpen'
import Info from '../../assets/icons/Info'
import Chat from '../../assets/icons/Chat'
import { formatNumber } from "../../utils/formatNumber"
import { htmlDecode } from "../../utils/htmlDecode"

interface IImageProps {
  img: string
  alt: string
}

const Image = styled.div<IImageProps>`
  ${tw`w-32 h-48 sm:w-40 sm:h-64`}
  background-image: url(${p => p.img});
  background-size: cover;
  background-position: top;
`

const AuthorBookCard = ({ book }: any) => {
  const title = excerpt(book.title)
  const img = changeImageSize(book.image_url)
  const [description, setDescription] = useState("")

  useEffect(() => {
    if (window !== undefined) {
      const desc: any = htmlDecode(book.description)
      setDescription(desc)
    }
  }, [book.description])

  return (
    <div className="relative px-4 py-6 border border-gray-200 rounded-lg hover:shadow-md">
      <div className="flex flex-col items-center px-10 sm:items-start sm:space-x-10 sm:flex-row">
        <Image img={img} alt={title} className="rounded-lg sm:flex-shrink-0" />

        <div className="flex flex-col items-center pt-6 sm:items-start sm:pt-3">
          <h3 className="text-xl font-medium text-center sm:text-left">{title}</h3>

          <div className="flex items-center mt-4 space-x-1">
            <Star width="w-5" height={"h-5"} color="text-orange-500" />
            <span className="font-medium">{book.average_rating} <span className="text-sm font-normal text-gray-600">({formatNumber(book.ratings_count)} ratings)</span></span>
          </div>
          <div className="flex items-center mt-2 space-x-1 text-gray-600">
            <Chat width="w-5" height={"h-5"} color="text-gray-600" />
            <span>{formatNumber(book.text_reviews_count)} reviews</span>
          </div>
          <div className="flex items-center mt-4 space-x-1 text-gray-600">
            <BookOpen width="w-4" height={"h-4"} color="text-gray-600" />
            <span>{formatNumber(book.num_pages)} pages</span>
          </div>
          <div className="flex items-center mt-4 space-x-1 text-sm text-gray-600">
            <Info width="w-5" height={"h-5"} color="text-gray-500" />
            <span>{book.format}</span>
          </div>
          <div className="flex flex-col mt-1 text-sm font-light text-gray-500 sm:flex-row sm:space-x-2">
            <span className="italic">Published in {book.publication_year}</span>
            <span className="hidden sm:inline-block">|</span>
            <span className="italic">ISBN: {book.isbn !== "" ? book.isbn : "Unknown"}</span>
          </div>
        </div>
      </div>

      <div className="px-6 mt-8 leading-relaxed">
        <div dangerouslySetInnerHTML={{
          __html: description
        }} />
      </div>

      <div className="flex justify-center">
        <span className="inline-flex mt-6 rounded-md shadow-sm">
          <a href={book.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-2.5 py-2 border border-transparent text-sm leading-4 font-medium rounded text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-gray-900 transition ease-in-out duration-150">
            See on Goodreads
          </a>
        </span>
      </div>
    </div>
  )
}

export default AuthorBookCard
