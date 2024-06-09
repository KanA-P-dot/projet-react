import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import WeatherList from './pages/WeatherList';
import About from './pages/About';
import './styles/styles.css';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/weather">Weather</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<WeatherList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
