import { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { deleteDog, fetchDogById } from '../services/dogs';

export default function DogDetail() {
  const params = useParams();
  const history = useHistory();
  const [dog, setDog] = useState({});
  const [error, setError] = useState('');

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(params.id);
      setDog(data);
      setLoading(false);
    };
    fetchData();
  }, [params.id]);
  const handleSubmit = async () => {
    try {
      await deleteDog(params.id);
      history.push(`/dogs`);
    } catch (e) {
      setError('OOPSIES. Error has occurred');
    }
  };
  if (loading) return <div>LOADING</div>;
  return (
    <div>
      {error && <p>{error}</p>}

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
        <button onClick={handleSubmit}>Delete Dog</button>
      </>
    </div>
  );
}
