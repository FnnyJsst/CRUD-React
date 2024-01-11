// App.js
import React, { useState } from 'react';
import UserTable from './Components/UserTable';
import UserForm from './Components/UserForm';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const deleteUser = (userId) => {
    // Logique pour supprimer un utilisateur
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6"> {/* Utilisez la moitié de la largeur de la grille Bootstrap */}
          <UserForm addUser={addUser} />
        </div>
        <div className="col-md-6">
          <UserTable users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
