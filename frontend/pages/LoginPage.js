import React, { useState } from 'react';
import Link from 'next/link';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  const Login = () => {

    console.log('Logging in with:', { username, password });

  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '400px', padding: '30px', border: '1px solid #ccc', borderRadius: '12px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign In</h2>
        <label style={{ display: 'block', marginBottom: '15px' }}>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #aaa', marginBottom: '10px' }} />
        </label>
        <label style={{ display: 'block', marginBottom: '20px' }}>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #aaa', marginBottom: '10px' }} />
        </label>
        <button onClick={Login} style={{ backgroundColor: '#3498db', color: '#fff', padding: '12px', borderRadius: '8px', border: 'none', cursor: 'pointer', width: '100%', fontSize: '16px' }}>Sign In</button>
        <div style={{ marginTop: '15px', textAlign: 'center' }}>
          <Link href="/LandingPage">Forgot Password</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
