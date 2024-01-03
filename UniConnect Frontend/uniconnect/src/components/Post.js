// components/Post.js
"use client"
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';

const Post = ({post}) => {

  const {postId} = useSearchParams();

  const [newComment, setNewComment] = useState('');

  const handleComment = async (postId) => {
    if (newComment.trim() === '') {
      return;
    }

    const response = await fetch(`/api/Posts/${postId}/comment`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ comment: newComment }),
    });

    if (response.ok) {
      getPosts();
      setNewComment('');
    } else {
      alert('Error commenting on post');
    }
  };

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
    <div className="mb-4 bg-black text-white p-6 rounded-lg shadow-md" key={key}>
      <h3 className="text-xl font-semibold mb-2">{post.username}</h3>
      <p className="mb-4">{post.caption}</p>
      <div className="flex items-center space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          onClick={() => handleLike(postId)}
        >
          Like
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800"
          onClick={() => handleDislike(postId)}
        >
          Dislike
        </button>
      </div>
        <div className="mt-4">
          {post.comments.map((comment, index) => (
            <div key={index} className="mb-2 p-2 bg-gray-100 rounded-lg text-black">
              {comment}
            </div>
          ))}
          <div className="flex mt-2 text-black">
          <div className="flex mt-2 text-black">
              <input
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              <button
                onClick={() => handleComment(post._id)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              >
                Post
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Post;