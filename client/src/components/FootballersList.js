import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FootballersList() {
  const [footballers, setFootballers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/footballers`)
      .then(response => setFootballers(response.data))
      .catch(error => {
        console.error('Error fetching footballers:', error);
        setError('Failed to fetch footballers. Please try again.');
      });
  }, []);

  return (
    <div className="footballers-list">
      <h2>Top Footballers</h2>
      {error && <p className="error">{error}</p>}
      <ul>
        {footballers.map(footballer => (
          <li key={footballer._id}>
            <strong>{footballer.name}</strong> - {footballer.position} ({footballer.country}, {footballer.age} years)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FootballersList;