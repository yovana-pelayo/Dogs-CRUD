import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchDogById } from '../services/dogs';

export default function DogDetail() {
  const params = useParams();
  const [dog, setDog] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(params.id);
      setDog(data);
      setLoading(false);
    };
    fetchData();
  }, [params.id]);
  if (loading) return <div>LOADING</div>;
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
      <>
        <Link to={`/dogs/${params.id}/edit`}>Edit Dog</Link>
      </>
    </div>
  );
}
