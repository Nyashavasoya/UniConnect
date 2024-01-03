"use client" // the client component

import { useState, useEffect } from 'react';

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
    }
    
  ]);

  const [newComment, setNewComment] = useState('');

  const handleComment = async (postId) => {
    if (newComment.trim() === '') {
      // Don't post empty comments
      return;
    }

    const response = await fetch(`/api/posts/${postId}/comment`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ comment: newComment }),
    });

    if (response.ok) {
      getPosts();
      setNewComment(''); // Clear the comment input field after posting
    } else {
      alert('Error commenting on post');
    }
  };
  

 const getPosts = async () => {
  const response = await fetch('/api/posts');

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


 return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.username}</h3>
          <p>{post.caption}</p>
          <button onClick={() => handleLike(post._id)}>Like</button>
          <button onClick={() => handleDislike(post._id)}>Dislike</button>
          <div className="comment-section">
            {post.comments.map((comment, index) => (
              <div className="comment" key={index}>
                {comment}
              </div>
            ))}
            <div className="comment">
              <input
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button onClick={() => handleComment(post._id)}>Post</button>
            </div>
          </div>
        </div>
      ))}
    </div>
 );
};

export default Posts;