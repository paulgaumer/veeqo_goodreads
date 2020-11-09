import React, { useState, useContext, useEffect } from 'react'
import { ContextStore } from "../../context/store"
import { getBooks } from "../../api/requests"
import SearchField from "../../components/searchFields/SearchFields"

const SearchContainer = () => {
  const [searchedKeyword, setSearchedKeyword] = useState<string>("")
  const [searchType, setSearchType] = useState<string>("title")
  const { state, dispatch } = useContext(ContextStore)
  const { firstInit } = state

  /**
   * Seed books on website first load
   */
  useEffect(() => {
    if (firstInit) {
      const getSeeds = async () => {
        const data = await getBooks("Harry Potter", "title")
        if (data.api.status === 200) {
          dispatch({
            type: "SET_FIRST_INIT",
            payload: false
          })
        }
        return data
      }
      const setSeeds = async () => {
        dispatch({
          type: "SET_BOOKS",
          payload: await getSeeds()
        })
      }
      setSeeds()
    }
  }, [firstInit, dispatch])

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
      placeholder="Ex: Harry Potter"
    />
  )
}

export default SearchContainer
