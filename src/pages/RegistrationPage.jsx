import React, { useState } from 'react';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
;

  return (
    <div>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button>Register</button>
    </div>
  )
}

export default RegistrationPage