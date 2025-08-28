import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Editions from './pages/Editions';
import './App.css';
import Sponsors from './pages/Sponsors';
import Projects from './pages/Projects';
import CodeOfConduct from './pages/CodeOfConduct';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';


const Shop = () => <div style={{ padding: '2rem' }}>Shop Page</div>;
const Gallery = () => <div style={{ padding: '2rem' }}>Gallery Page</div>;

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/editions" element={<Editions />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
