import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [books, setBooks] = useState<any[]>([])

  useEffect(() => {
    const getBooksByTitle = async () => {
      const res = await fetch('/.netlify/functions/getBooksByTitle');
      const data = await res.json();
      console.log(data)
      setBooks(data.books);
    }
    getBooksByTitle()
  }, [])


  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
      <ul className="list-disc list-inside">
        {books.map((book) => {
          return <li><Link to={"/authors/1"}>{book.best_book.title}</Link></li>
        })}
      </ul>
    </div>
  );
}

export default Home