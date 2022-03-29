import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDogs } from '../services/dogs';

export default function Dogs() {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      setDogs(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Thinking of adopting a dog? You came to the right place</h1>
      {dogs.map((dog) => (
        <div key={dog.id}>
          <p>{dog.name}</p>
        </div>
      ))}
    </div>
  );
}
