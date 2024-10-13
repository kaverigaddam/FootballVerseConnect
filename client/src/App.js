import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import FootballersList from './components/FootballersList';
import VerseDisplay from './components/VerseDisplay';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Verse</Link></li>
            <li><Link to="/footballers">Footballers</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<VerseDisplay />} />
          <Route path="/footballers" element={<FootballersList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;