import React from 'react';
import Home from "./Home"
import Author from "./Author"
import Layout from "./Layout"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authors">
            <Route path=":id" element={<Author />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;
