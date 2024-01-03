// NewPost.js
"use client"
import React, { useState } from 'react';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to handle file uploads
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', file);

    // Use formData in your API request
    // const response = await axios.post('/api/posts', formData);

    // Reset form fields
    setTitle('');
    setDescription('');
    setFile(null);
  };

  return (
    <div className="container mx-auto p-4 max-w-md rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create Post</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Title:
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1 text-black"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className="block mb-2">
          Description:
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1 text-black"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label className="block mb-2">
          Upload File:
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1 text-white"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default NewPost;
