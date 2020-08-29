import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function LoginPanel({ updateUser, currentUserId }) {
  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('password');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/session`, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const { player } = await response.json();
      updateUser(player.id);
    }
  };

  const updateEmail = e => {
    setEmail(e.target.value);
  };

  const updatePassword = e => {
    setPassword(e.target.value);
  };

  if (currentUserId) {
    return <Redirect to="/" />;
  }
  return (
    <main className="centered middled">
      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail} />
        <input type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword} />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
export default LoginPanel;
