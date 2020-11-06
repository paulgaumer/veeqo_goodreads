import React from 'react';
import './App.css';
import Home from "./components/Home"
import About from "./components/About"
import Posts from "./components/Posts"
import PostsLists from "./components/PostsLists"
import Post from "./components/Post"
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
