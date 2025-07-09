import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';


const Editions = () => <div style={{ padding: '2rem' }}>Editions Page</div>;
const Shop = () => <div style={{ padding: '2rem' }}>Shop Page</div>;
const Gallery = () => <div style={{ padding: '2rem' }}>Gallery Page</div>;
const Sponsors = () => <div style={{ padding: '2rem' }}>Sponsors Page</div>;
const Projects = () => <div style={{ padding: '2rem' }}>Projects Page</div>;

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/editions" element={<Editions />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
