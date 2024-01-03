"use client"
import React, { useState } from 'react';

import Link from 'next/link';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    // Handle file changes
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSignup = () => {
    // Perform signup logic here
    console.log('Signing up with:', { username, password, file });
    // You can add your signup logic, such as API calls or authentication handling
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '400px', padding: '30px', border: '1px solid #ccc', borderRadius: '12px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign Up</h2>
        <label style={{ display: 'block', marginBottom: '15px' }}>
          Upload File:
          <input type="file" onChange={handleFileChange} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #aaa', marginBottom: '10px' }} />
        </label>
        <label style={{ display: 'block', marginBottom: '15px' }}>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #aaa', marginBottom: '10px' }} />
        </label>
        <label style={{ display: 'block', marginBottom: '20px' }}>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #aaa', marginBottom: '10px' }} />
        </label>
        <button onClick={handleSignup} style={{ backgroundColor: '#3498db', color: '#fff', padding: '12px', borderRadius: '8px', border: 'none', cursor: 'pointer', width: '100%', fontSize: '16px' }}>Sign Up</button>
        <div style={{ marginTop: '15px', textAlign: 'center' }}>
          <Link href="/LoginPage">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
