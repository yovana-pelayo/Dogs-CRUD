import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { signInUser } from '../services/users';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await signInUser(email, password);
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <div>
      <h1>Sign In</h1>
      <form className="auth" onSubmit={handleSubmit}>
        <label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
      </form>
    </div>
  );
}
