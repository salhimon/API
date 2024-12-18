import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h3>Name: {user.name}</h3>
      <p>Email: {user.email}</p>
      <p>phone: {user.phone}</p>
    </div>
  );
};

export default UserCard;
