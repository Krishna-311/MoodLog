import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import NewEntry from './pages/NewEntry';
import MyEntries from './pages/MyEntries';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <h1>MoodLog</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/new">New Entry</Link>
          <Link to="/entries">My Entries</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewEntry />} />
        <Route path="/entries" element={<MyEntries />} />
      </Routes>
    </Router>
  );
}

export default App;
