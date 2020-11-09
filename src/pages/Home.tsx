import React from 'react';
import Hero from "../components/hero/Hero"
import CardsGrid from '../components/books/CardsContainer';

function Home() {
  return (
    <div>
      <Hero />
      <div className="mt-36">
        <CardsGrid />
      </div>
    </div>
  );
}

export default Home