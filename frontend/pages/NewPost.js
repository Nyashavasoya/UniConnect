"use client"; // This is a client component 


import React, { useState } from 'react';

import './styles/NewPost.css';

const NewPost = () => {
    const [title, setTitle] = useState('');
    const [institute, setInstitute] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to handle file uploads
    const formData = new FormData();
    formData.append('title', title);
    formData.append('institute', institute);
    formData.append('description', description);
    formData.append('file', file);

    // Use formData in your API request
    // const response = await axios.post('/api/posts', formData);

    // Reset form fields
    setTitle('');
    setInstitute('');
    setDescription('');
    setFile(null);
  };

  return (
    <div className="container">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Institute:
          <input type="text" value={institute} onChange={(e) => setInstitute(e.target.value)} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Upload File:
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NewPost;
