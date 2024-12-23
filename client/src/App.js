import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ListingPage from './pages/ListingPage';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listing/:id" element={<ListingPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
