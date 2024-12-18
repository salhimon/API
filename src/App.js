import './App.css';
import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import ListUser from './userlist';

function App() {
  const [users, setUsers] = useState([]);

  
  return (
    <div className="App">
      <h1>Gestion des utilisateurs</h1>
      <ListUser users={users} />
    </div>
  );
}

export default App;
