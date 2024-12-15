import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Contacts from './pages/Contacts'; // Import the Contacts page

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar is now rendered on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} /> {/* Add Contacts route */}
      </Routes>
    </Router>
  );
}

export default App;
