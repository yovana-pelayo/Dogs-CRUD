import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDogs } from '../services/dogs';
import { Link } from 'react-router-dom';
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
        <Link key={dog.id} to={`/dogs/${dog.id}`}>
          <div>
            <h3>{dog.name}</h3>
            <img src={dog.image} />
          </div>
        </Link>
      ))}
    </div>
  );
}
