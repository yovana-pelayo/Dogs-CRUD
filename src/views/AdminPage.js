import { useState } from 'react';
import DogForm from '../Components/DogForm';
import { createDog } from '../services/dogs';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function AdminPage() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');
  const [breed, setBreed] = useState('');
  const [image, setImage] = useState('');
  const [treat, setTreat] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async () => {
    try {
      await createDog({ name, age, bio, breed, image, treat });
      history.push('/dogs');
    } catch (e) {
      setError('OOOPSIE DAISIES');
    }
  };
  return (
    <div>
      {error && (
        <p>
          {error} <span onClick={() => setError('')}>❌</span>
        </p>
      )}
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
          treat,
          setTreat,
          handleSubmit,
        }}
      />
    </div>
  );
}

// look up useHistory: I believe it just stored the info from another page and allows us to use it. not sure
