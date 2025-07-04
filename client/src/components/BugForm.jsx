import React, { useState } from 'react';
import axios from 'axios';

export default function BugForm({ onBugAdded }) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:4000/api/bugs', {title});
    onBugAdded(res.data);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Bug title'
        required
      />
      <button
        type='submit'
        >
          Add Bug
      </button>
    </form>
  );
}