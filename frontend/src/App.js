import './BeautifulColors.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProblemDetail from './pages/ProblemDetail';
import ReportProblem from './pages/ReportProblem';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/problem/:id" element={<ProblemDetail />} />
          <Route path="/report" element={<ReportProblem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;