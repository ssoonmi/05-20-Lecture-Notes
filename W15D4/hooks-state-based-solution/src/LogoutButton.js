import React from 'react';

function LogoutButton({ updateUser }) {
  const logout = () => {
    fetch(`/api/session`, {
      method: 'delete'
    }).then(() => updateUser());
  }

  return (
    <div id="logout-button-holder">
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default LogoutButton;
