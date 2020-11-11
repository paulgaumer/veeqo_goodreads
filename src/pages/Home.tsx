import React from 'react';
import Hero from "../components/hero/Hero"
import CardsGrid from '../components/books/CardsContainer';

function Home() {
  return (
    <>
      <Hero />
      <section className="mt-36">
        <CardsGrid />
      </section>
    </>
  );
}

export default Home