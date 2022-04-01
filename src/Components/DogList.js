import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDogs } from '../services/dogs';
import { Link } from 'react-router-dom';

export default function DogList() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      setDogs(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) return <div>Loading</div>;
  return (
    <div>
      <h1>Are you looking for a fuzz ball of love?</h1>
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
