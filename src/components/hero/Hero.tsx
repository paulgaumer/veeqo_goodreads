import React from 'react'
import styled from "styled-components"
import { motion } from "framer-motion"
import SearchContainer from "../searchFields/SearchContainer"

const SearchWrapper = styled.div`
  position: absolute;
  bottom: -80px;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
`

const Hero = () => {

  const focusSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const searchBar: HTMLElement | null = document.querySelector(".searchBar")
    if (searchBar) {
      window.scrollTo(0, searchBar.offsetTop)
      searchBar.focus()
    }
  }

  return (
    <div className="relative">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <div className="relative px-4 pt-6 sm:px-6 lg:px-8"></div>
          <main className="max-w-screen-xl px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.2 },
                }}
                className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                Make the world your personal library
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.3 },
                }}
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Goodbooks brings the best authors and the most exciting literature right into your pocket. Discover recent novels or review your classics.
            </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.3 },
                }}
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button onClick={focusSearch} className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-teal-600 border border-transparent rounded-md hover:bg-teal-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10">
                    Find a book
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="https://www.paulgaumer.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-teal-700 transition duration-150 ease-in-out bg-teal-100 border border-transparent rounded-md hover:text-teal-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 md:py-4 md:text-lg md:px-10">
                    About this site
              </a>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://source.unsplash.com/RrhhzitYizg/800x900" alt="" />
      </div>
      <SearchWrapper>
        <SearchContainer />
      </SearchWrapper>
    </div>
  )
}

export default Hero
