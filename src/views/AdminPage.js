import { useState } from 'react';
import DogForm from '../Components/DogForm';
import { createDog } from '../services/dogs';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function AdminPage() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [bio, setBio] = useState('');
  const [breed, setBreed] = useState('');
  const [image, setImage] = useState('');
  //   const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async () => {
    await createDog({ name, age, bio, breed, image });
    history.push('dogs');
  };
  return (
    <div>
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

// look up useHistory: I believe it just stored the info from another page and allows us to use it. not sure
