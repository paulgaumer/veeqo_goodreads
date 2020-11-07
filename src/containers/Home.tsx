import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextStore } from "../context/store"
import { getBooks } from "../api/requests"
import SearchField from "../components/SearchField"

function Home() {
  const [searchedKeyword, setSearchedKeyword] = useState<string>("")
  const [searchType, setSearchType] = useState<string>("title")
  const { state, dispatch } = useContext(ContextStore)
  const { books } = state

  const handleRadioChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.target.value
    setSearchType(type)

    /**
     * Update the list of books on radio change, based on the same keyword
     * Stop auto-update of type equals ISBN or keyword is empty to avoid request errors
     */
    if (type !== "isbn" && searchedKeyword !== "") {
      dispatch({
        type: "SET_BOOKS",
        payload: await getBooks(searchedKeyword, type)
      })
    }
  }

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value
    setSearchedKeyword(keyword)

    /**
     * Set the requested list of books into context
     */
    if (keyword !== "") {
      dispatch({
        type: "SET_BOOKS",
        payload: await getBooks(keyword, searchType)
      })
    }

    /**
     * Reset the author into context
     */
    dispatch({
      type: "SET_AUTHOR",
      payload: null
    })
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
      <SearchField
        inputValue={searchedKeyword}
        radioValue={searchType}
        onInputChange={handleInputChange}
        onRadioChange={handleRadioChange}
        placeholder="Search for a book"
      />
      <ul className="list-disc list-inside mt-20">
        {books.map((book) => {
          return <li key={book.id}>
            <Link to={`/authors/${book.author.id}`}>{book.title}</Link>
          </li>
        })}
      </ul>
    </div>
  );
}

export default Home