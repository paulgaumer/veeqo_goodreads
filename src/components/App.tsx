import React from 'react';
import Home from "./Home"
import Author from "./Author"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return <Router>
    <nav style={{ margin: 10 }}>
      <Link to="/" style={{ padding: 5 }}>
        Home
    </Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/authors">
        <Route path=":id" element={<Author />} />
      </Route>
    </Routes>
  </Router>
}

export default App;
