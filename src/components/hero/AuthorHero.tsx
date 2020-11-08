import React from 'react'
import { IAuthor } from "../../types/author"
import Heart from "../../assets/icons/Heart"
import People from "../../assets/icons/People"

interface IProps {
  author: IAuthor
}

const AuthorHero = ({ author }: IProps) => {
  return (
    <section className="flex justify-center text-white bg-gray-700 py-14 md:py-20 rounded-2xl">
      <div className="flex flex-col items-center md:space-x-20 md:flex-row">
        <img src={author.image_url} alt={author.name} className="rounded-lg" />

        <div className="flex flex-col items-center mt-6 md:mt-0 md:items-end">
          <h2 className="mb-6 text-4xl md:text-6xl">{author.name}</h2>
          <p className="mb-6">{author.hometown}</p>
          <div className="flex space-x-10">
            <p className="flex items-center space-x-2">
              <Heart width={"w-5"} height={"h-5"} color={"text-white"} />
              <span>{author.fans_count} fans</span>
            </p>
            <p className="flex items-center space-x-2">
              <People width={"w-5"} height={"h-5"} color={"text-white"} />
              <span>{author.author_followers_count} followers</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AuthorHero
