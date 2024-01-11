import React, { useState } from 'react';

export default function UserForm({ addUser }) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      username,
    };

    addUser(newUser);

    // Réinitialisation des champs du formulaire
    setName('');
    setUsername('');
  };

  return (
    <div>
      <h2>Ajouter des utilisateurs</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Nom</label>
          <input
            className='form-control form-control-lg'
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Nom d'utilisateur</label>
          <input
            className='form-control form-control-lg'
            type='text'
            id='username'
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Ajouter un nouvel utilisateur
        </button>
      </form>
    </div>
  );
}
