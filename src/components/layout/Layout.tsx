import React from 'react'
import { Link } from 'react-router-dom';


interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
          </Link>
      </nav>
      {children}
    </div>
  )
}

export default Layout
