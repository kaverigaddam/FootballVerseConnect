import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import FootballersList from './components/FootballersList';
import VerseDisplay from './components/VerseDisplay';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Final Project: Full Stack MERN Application</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/footballers">Footballers</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<VerseDisplay />} />
            <Route path="/footballers" element={<FootballersList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;