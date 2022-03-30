import { useEffect, useState } from 'react';
import { fetchDogById } from '../services/dogs';

export default function DogDetail() {
  const [dog, setDog] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById();
      setDog(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Fuzzy Buddies Details!</h1>
      <h2>{dog.name}</h2>
      <p>
        {dog.name}
        {dog.breed}{' '}
      </p>
      <p>{dog.bio}</p>
    </div>
  );
}
