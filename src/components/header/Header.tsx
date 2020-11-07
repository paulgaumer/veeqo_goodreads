import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="lg:w-0 lg:flex-1">
              <Link to="/" className="flex items-center font-bold">
                <p>GOODREEDS</p>
              </Link>
            </div>

            <nav className="flex items-center justify-end space-x-8 flex-1">
              <Link to="/" className="whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900">
                About
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
