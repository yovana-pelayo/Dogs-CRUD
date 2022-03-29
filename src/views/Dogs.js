import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDogs } from '../services/dogs';

export default function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDogs();
        setDogs(data);
      } catch (e) {
        setError(e.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Are you looking for a fuzz ball of love?</h1>
      {error && <p>{error}</p>}
      {dogs.map((dog) => (
        <div key={dog.id}>
          <p>
            {dog.name}
            <img src={dog.image} />
          </p>
        </div>
      ))}
    </div>
  );
}
