import React from 'react';
import Home from "./Home"
import About from "./About"
import Posts from "./Posts"
import PostsLists from "./PostsLists"
import Post from "./Post"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return <Router>
    <nav style={{ margin: 10 }}>
      <Link to="/" style={{ padding: 5 }}>
        Home
    </Link>
      <Link to="/about" style={{ padding: 5 }}>
        About
    </Link>
      <Link to="/posts" style={{ padding: 5 }}>
        Posts
    </Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />}>
        <Route path="/" element={<PostsLists />} />
        <Route path=":slug" element={<Post />} />
      </Route>
    </Routes>
  </Router>
}

export default App;
