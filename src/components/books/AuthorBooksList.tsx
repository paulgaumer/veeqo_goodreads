import React from 'react'
import { IAuthor } from "../../types/author"
import Book from "../../assets/icons/Book"
import AuthorBookCard from "../books/AuthorBookCard"
import Masonry from 'react-masonry-css'
import styled from "styled-components"

interface IProps {
  author: IAuthor
}

const Grid = styled.div`
  .masonry-grid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: -30px;
    width: auto;
  }
  .masonry-grid_column {
    padding-left: 30px;
    background-clip: padding-box;
  }

  .masonry-grid_column > div {
    margin-bottom: 30px;
  }
`

const AuthorBooksList = ({ author }: IProps) => {
  return (
    <div>
      <h3 className="inline-flex pb-2 pr-8 space-x-2 text-2xl border-b border-gray-200">
        <Book color={"text-gray-700"} />
        <span>{author.name}'s books</span>
      </h3>
      <Grid>
        <Masonry
          breakpointCols={2}
          className="mt-10 masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {author.books.map(book => {
            return <div key={book.id}><AuthorBookCard book={book} /></div>
          })}
        </Masonry>
      </Grid>
    </div>
  )
}

export default AuthorBooksList
