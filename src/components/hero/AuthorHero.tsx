import React from 'react'
import { IAuthor } from "../../types/author"
import Heart from "../../assets/icons/Heart"
import People from "../../assets/icons/People"

interface IProps {
  author: IAuthor
}

const AuthorHero = ({ author }: IProps) => {
  return (
    <section className="flex justify-center py-20 text-white bg-gray-700 rounded-2xl">
      <div className="flex space-x-20">
        <img src={author.image_url} alt={author.name} className="rounded-lg" />
        <div className="flex flex-col items-end">
          <h2 data-name="name" className="mb-6 text-6xl">{author.name}</h2>
          <p data-name="hometown">{author.hometown}</p>
          <div data-name="fans-followers" className="flex mt-10 space-x-10">
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
