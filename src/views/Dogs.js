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

  return <div>dogs</div>;
}
