import React, { useContext } from 'react';
import { ContextStore } from "../context/store"
import Hero from "../components/hero/Hero"
import CardsGrid from '../components/books/CardsGrid';

function Home() {
  const { state } = useContext(ContextStore)
  const { bookSearch } = state

  return (
    <div>
      <Hero />
      <div className="mt-36">
        <CardsGrid books={bookSearch.books} search={bookSearch.search} />
      </div>
    </div>
  );
}

export default Home