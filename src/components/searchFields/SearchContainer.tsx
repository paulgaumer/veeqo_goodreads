import React, { useState, useContext } from 'react'
import { ContextStore } from "../../context/store"
import { getBooks } from "../../api/requests"
import SearchField from "../../components/searchFields/SearchFields"

const SearchContainer = () => {
  const [searchedKeyword, setSearchedKeyword] = useState<string>("")
  const [searchType, setSearchType] = useState<string>("title")
  const { dispatch } = useContext(ContextStore)

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
      const data = await getBooks(keyword, searchType)
      console.log(data)
      // if (data.api.status === 200) {
      dispatch({
        type: "SET_BOOKS",
        payload: await getBooks(keyword, searchType)
      })
      // }
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
    <SearchField
      inputValue={searchedKeyword}
      radioValue={searchType}
      onInputChange={handleInputChange}
      onRadioChange={handleRadioChange}
      placeholder="Enter your keywords"
    />
  )
}

export default SearchContainer
