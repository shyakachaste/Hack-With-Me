import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Editions from './pages/Editions';
import './App.css';
import Sponsors from './pages/Sponsors';
import Projects from './pages/Projects';


const Shop = () => <div style={{ padding: '2rem' }}>Shop Page</div>;
const Gallery = () => <div style={{ padding: '2rem' }}>Gallery Page</div>;

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="page-content">
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
      </div>
    </Router>
  );
};

export default App;
