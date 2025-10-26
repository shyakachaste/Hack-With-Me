import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import './App.css';
import CodeOfConduct from './pages/CodeOfConduct';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
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