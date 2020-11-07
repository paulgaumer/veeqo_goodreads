import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';

function Home() {
  const [books, setBooks] = useState<any[]>([])
  const [searchInput, setSearchInput] = useState<string>("")

  useEffect(() => {
    const getBooksByTitle = async (keyword: string) => {
      const res = await fetch(`/.netlify/functions/getBooksByKeyword?keyword=${keyword}`);
      const data = await res.json();
      console.log(data)
      setBooks(data.books);
    }
    searchInput !== "" && getBooksByTitle(searchInput)
  }, [searchInput])

  const handleChange = (e: any) => {
    setSearchInput(e.target.value)
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
          return <li><Link to={`/authors/${book.author.id}`}>{book.title}</Link></li>
        })}
      </ul>
    </div>
  );
}

export default Home