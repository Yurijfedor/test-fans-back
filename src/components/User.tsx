import React, { useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import axios from 'axios';

const User = () => {
  const { token, user, logout } = useAuth();
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    if (token && user) {
      axios
        .get(`http://localhost:3000/api/v1/get-user/${user.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setUserData(response.data))
        .catch(() => setUserData(null));
    }
  }, [token, user]);

  if (!userData) {
    return <div>Пользователь не найден или ошибка авторизации.</div>;
  }

  return (
    <div>
      <h1>Добро пожаловать, {userData.name}</h1>
      <p>Email: {userData.email}</p>
      <p>Phone: {userData.phone}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default User;
