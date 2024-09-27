// src/components/MyRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import HTML from './HTML';
import CSS from './CSS';
import JS from './JS';
import Navbar from './Navbar';

const MyRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/html" element={<HTML />} />
          <Route path="/css" element={<CSS />} />
          <Route path="/js" element={<JS />} />
        </Routes>
      </div>
    </Router>
  );
}

export default MyRouter;
