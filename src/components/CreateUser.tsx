import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/v1/add-user',
        { name, email, phone },
      );
      if (response.status === 201) {
        setMessage('Пользователь успешно создан');
      }
    } catch (error) {
      setMessage('Ошибка при создании пользователя');
    }
  };

  return (
    <div>
      <h2>Создание нового пользователя</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
      />
      <button onClick={handleSubmit}>Создать пользователя</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateUser;
