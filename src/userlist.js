import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard.js';

const ListUser = () => {
  const [users, setUsers] = useState([]); // État pour stocker les utilisateurs
  const [loading, setLoading] = useState(true); // État pour gérer le chargement

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://jsonplaceholder.typicode.com/users'); // Appel API
        setUsers(response.data); // Mise à jour des utilisateurs
      } catch (err) {
        console.error('Erreur lors de la récupération des utilisateurs:', err);
      } finally {
        setLoading(false); // Fin du chargement
      }
    };

    fetchUsers();
  }, []); // Le tableau vide [] garantit que l'appel se fait une seule fois au montage du composant

  if (loading) {
    return <p>Chargement des utilisateurs...</p>;
  }

  if (users.length === 0) {
    return <p>Aucun utilisateur disponible.</p>;
  }

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {users.map((user) => (
          <UserCard key={user.id} user={user} /> // Utilisation de `user.id` comme clé unique
        ))}
      </ul>
    </div>
  );
};

export default ListUser;
