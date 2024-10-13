import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../config';

function FootballersList() {
  const [footballers, setFootballers] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/api/footballers`)
      .then(response => setFootballers(response.data))
      .catch(error => console.error('Error fetching footballers:', error));
  }, []);

  return (
    <div>
      <h2>Top Footballers</h2>
      <ul>
        {footballers.map(footballer => (
          <li key={footballer._id}>
            {footballer.name} - {footballer.position} ({footballer.country}, {footballer.age} years)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FootballersList;