import React, { useEffect, useState } from 'react';
import DogForm from '../Components/DogForm';
import { fetchDogById, updateDog } from '../services/dogs';
import { useParams, useHistory } from 'react-router-dom';
export default function EditDog() {
  const params = useParams();
  const history = useHistory();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');
  const [breed, setBreed] = useState('');
  const [image, setImage] = useState('');
  const [treat, setTreat] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(params.id);
      setName(data.name);
      setAge(data.age);
      setBio(data.bio);
      setBreed(data.breed);
      setImage(data.image);
      setTreat(data.treat);
    };
    fetchData();
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDog({ id: params.id, name, bio, breed, image, age, treat });
      history.push(`/dogs/${params.id}`);
    } catch (e) {
      setError('OOPSIES. Error has occurred');
    }
  };
  return (
    <div>
      {error && <p>{error}</p>}

      <DogForm
        {...{
          name,
          setName,
          age,
          setAge,
          bio,
          setBio,
          breed,
          setBreed,
          image,
          setImage,
          handleSubmit,
        }}
      />
    </div>
  );
}
