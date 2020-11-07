import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import { ContextStore } from "../context/store"
import { getBooks } from "../api/requests"

function Home() {
  const [searchInput, setSearchInput] = useState<string>("")
  const { state, dispatch } = useContext(ContextStore)
  const { books } = state

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value
    setSearchInput(keyword)

    /**
     * Set the requested lis of books into context
     */
    dispatch({
      type: "SET_BOOKS",
      payload: await getBooks(keyword)
    })

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
      <DebounceInput
        debounceTimeout={300}
        value={searchInput}
        placeholder="Search for a book"
        onChange={handleChange} />
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