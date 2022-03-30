import React from 'react';
export default function DogForm({ name, setName }) {
  return (
    <form>
      <label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
    </form>
  );
}
