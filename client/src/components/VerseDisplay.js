import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../config';

function VerseDisplay() {
  const [verse, setVerse] = useState({ reference: '', text: '' });

  const fetchVerse = () => {
    axios.get(`${API_URL}/api/verse`)
      .then(response => setVerse(response.data))
      .catch(error => console.error('Error fetching verse:', error));
  };

  useEffect(fetchVerse, []);

  return (
    <div>
      <h2>Verse of the Moment</h2>
      <p><em>{verse.reference}</em>: {verse.text}</p>
      <button onClick={fetchVerse}>New Verse</button>
    </div>
  );
}

export default VerseDisplay;