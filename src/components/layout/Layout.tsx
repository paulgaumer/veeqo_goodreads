import React from 'react'
import Header from "../header/Header"
import Footer from "../footer/Footer"

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen text-base">
      <div className="flex flex-col flex-grow w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Header />
        <main className="flex-grow">{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
