import { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { deleteDog, fetchDogById } from '../services/dogs';

export default function DogDetail({ currentUser }) {
  const params = useParams();
  const history = useHistory();
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
  const handleSubmit = async () => {
    await deleteDog(params.id);
    history.push(`/dogs`);
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div>
          <h1>Fuzzy Buddies Details!</h1>
          <h2>{dog.name}</h2>

          <img src={dog.image} />
          <p>Age: {dog.age}</p>
          <p> Breed: {dog.breed}</p>
          <p>Favorite Treat: {dog.treat}</p>

          <p>{dog.bio}</p>
          {currentUser && (
            <>
              <Link to={`/dogs/${params.id}/edit`}>Edit Dog</Link>
              <button onClick={handleSubmit}>Delete Dog</button>
            </>
          )}
        </div>
      )}
    </>
  );
}
