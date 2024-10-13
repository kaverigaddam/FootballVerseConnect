import React, { useState, useEffect } from 'react';
import axios from 'axios';

function VerseDisplay() {
  const [verse, setVerse] = useState({ reference: '', text: '' });
  const [error, setError] = useState('');

  const fetchVerse = () => {
    setError('');
    axios.get(`${process.env.REACT_APP_API_URL}/api/verse`)
      .then(response => setVerse(response.data))
      .catch(error => {
        console.error('Error fetching verse:', error);
        setError('Failed to fetch verse. Please try again.');
      });
  };

  useEffect(fetchVerse, []);

  return (
    <div className="verse-display">
      <h2>Scripture of the Day</h2>
      {error && <p className="error">{error}</p>}
      <p className="verse-text"><strong>{verse.reference}</strong>: {verse.text}</p>
      <button onClick={fetchVerse}>Get New Scripture</button>
    </div>
  );
}

export default VerseDisplay;