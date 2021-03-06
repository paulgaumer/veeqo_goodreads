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
      <h3 className="inline-flex items-center pb-2 pr-8 mb-10 space-x-2 text-2xl font-medium border-b border-gray-200">
        <Book color={"text-gray-700"} />
        <span>{author.name}'s books</span>
      </h3>
      {/* If the author has several books */}
      {author.books && Array.isArray(author.books) &&
        <Grid>
          <Masonry
            breakpointCols={{ default: 2, 1100: 1 }}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {author.books.map(book => {
              return <div key={book.id}><AuthorBookCard book={book} /></div>
            })}
          </Masonry>
        </Grid>
      }
      {/* If the author has only one book */}
      {author.books && !Array.isArray(author.books) &&
        <AuthorBookCard book={author.books} />
      }
    </div>
  )
}

export default AuthorBooksList
