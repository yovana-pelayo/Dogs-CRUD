import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchDogById } from '../services/dogs';

export default function DogDetail() {
  const params = useParams();
  const [dog, setDog] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(params.id);
      setDog(data);
    };
    fetchData();
  }, [params.id]);
  return (
    <div>
      <h1>Fuzzy Buddies Details!</h1>
      <h2>{dog.name}</h2>
      <ul>
        <img src={dog.image} />
        <li> Age: {dog.age}</li>
        <li> Breed: {dog.breed}</li>
        <li>Favorite Treat: {dog.treat}</li>
      </ul>
      <p>{dog.bio}</p>
    </div>
  );
}
