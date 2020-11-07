import React, { useState, useContext } from 'react';
import { ContextStore } from "../context/store"
import { getBooks } from "../api/requests"
import Hero from "../components/hero/Hero"
import SearchField from "../components/searchFields/SearchFields"
import CardsGrid from '../components/books/CardsGrid';

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
      <Hero />
      <SearchField
        inputValue={searchedKeyword}
        radioValue={searchType}
        onInputChange={handleInputChange}
        onRadioChange={handleRadioChange}
        placeholder="Search for a book"
      />

      <div className="mt-20">
        <CardsGrid books={books} />
      </div>
    </div>
  );
}

export default Home