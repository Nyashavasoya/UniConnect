"use client" // the client component

import { useState, useEffect } from 'react';

const Posts = () => {
 const [posts, setPosts] = useState([]);
 const [username, setUsername] = useState('');
 const [institute, setInstitute] = useState('');
 const [content, setContent] = useState('');

 useEffect(() => {
    const getPosts = async () => {
      const response = await fetch('/api/posts');

      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      } else {
        alert('Error loading posts');
      }
    };

    getPosts();
 }, []);

 const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, institute, content }),
    });

    if (response.ok) {
      setContent('');
      getPosts();
    } else {
      const data = await response.json();
      alert(data.message);
    }
 };

 const handleLike = async (postId) => {
    const response = await fetch(`/api/posts/${postId}/like`, {
      method: 'PUT',
    });

    if (response.ok) {
      getPosts();
    } else {
      alert('Error liking post');
    }
 };

 const handleDislike = async (postId) => {
    const response = await fetch(`/api/posts/${postId}/dislike`, {
      method: 'PUT',
    });

    if (response.ok) {
      getPosts();
    } else {
      alert('Error disliking post');
    }
 };

 const handleComment = async (postId, comment) => {
    const response = await fetch(`/api/posts/${postId}/comment`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ comment }),
    });

    if (response.ok) {
      getPosts();
    } else {
      alert('Error commenting on post');
    }
 };

 return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.username}</h3>
          <p>{post.content}</p>
          <p>Likes: {post.likes}</p>
          <p>Dislikes: {post.dislikes}</p>
          <button onClick={() => handleLike(post._id)}>Like</button>
          <button onClick={() => handleDislike(post._id)}>Dislike</button>
          <button onClick={() => handleComment(post._id, prompt('Enter your comment'))}>Comment</button>
        </div>
      ))}
    </div>
 );
};

export default Posts;