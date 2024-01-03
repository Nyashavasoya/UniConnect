"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Posts = () => {
  const [posts, setPosts] = useState([
    {
      username: '60c8ce847857f52250e4f2e1',
      caption: 'This is a sample post caption.',
      image: {
        public_id: 'sample_public_id',
        url: 'https://example.com/sample_image.jpg',
      },
      createdAt: new Date(),
      likes: 0,
      dislikes: 0,
      comments: ['Comment 1', 'Comment 2'],
    }, {
      username: 'abcd',
      caption: 'This is a sample post caption 2.',
      image: {
        public_id: 'sample_public_id',
        url: 'https://example.com/sample_image.jpg',
      },
      createdAt: new Date(),
      likes: 0,
      dislikes: 0,
      comments: ['Comment 1 of second post', 'Comment 2 of second post'],
    }
  ]);



  const getPosts = async () => {
    const response = await fetch('/api/Posts');

    if (response.ok) {
      const data = await response.json();
      setPosts(data);
    } else {
      alert('Error loading posts');
    }
  };

  useEffect(() => {
    getPosts();
  }, [posts]);

  const handleLike = async (postId) => {
    const response = await fetch(`/api/Posts/${postId}/like`, {
      method: 'PUT',
    });

    if (response.ok) {
      getPosts();
    } else {
      alert('Error liking post');
    }
  };

  const handleDislike = async (postId) => {
    const response = await fetch(`/api/Posts/${postId}/dislike`, {
      method: 'PUT',
    });

    if (response.ok) {
      getPosts();
    } else {
      alert('Error disliking post');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Posts</h2>
      <Link href = "/NewPost">Create a Post</Link>
      {posts.map((post) => (
        <div key={post._id} className="className={`mb-4 bg-black text-white p-6 rounded-lg shadow-md ${index !== posts.length - 1 ? 'mb-8 border-b border-white' : ''}`}">
          <h3 className="text-xl font-semibold mb-2">{post.username}</h3>
          <p className="mb-4">{post.caption}</p>
          <div className="flex items-center space-x-4">
            <button
              className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              onClick={() => handleLike(post._id)}
            >
              Like
            </button>
            <button
              className="bg-red-500 text-black px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800"
              onClick={() => handleDislike(post._id)}
            >
              Dislike
            </button>
          </div>
          <div className="mt-4">
            <div className="mt-4">
            <Link href={`/Posts/${post._id}`}>
              Comment
            </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;