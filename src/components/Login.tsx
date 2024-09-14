import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import axios from 'axios';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/v1/auth/login',
        { name, password },
      );
      const { token, user } = response.data;
      login(token, user);
      window.location.href = '/user.html'; // Перенаправление после успешного логина
    } catch (error) {
      setError('Ошибка авторизации. Проверьте введенные данные.');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
