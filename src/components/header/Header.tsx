import React from 'react'
import goodbooks from "../../assets/images/goodbooks.svg"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="mb-6">
      <div className="relative bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
            <div className="lg:w-0 lg:flex-1">
              <Link to="/" className="flex items-center font-bold">
                <img src={goodbooks} alt="Goodbooks" className="w-40" />
              </Link>
            </div>

            <nav className="flex items-center justify-end flex-1 space-x-8">
              <a href="https://www.paulgaumer.com/" target="_blank" rel="noopener noreferrer" className="text-base font-medium leading-6 text-gray-500 whitespace-no-wrap hover:text-gray-900 focus:outline-none focus:text-gray-900">
                Get in touch
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
