"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NewPost from '../NewPost/page';

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
    // const response = await fetch('/api/Posts');

    // if (response.ok) {
    //   const data = await response.json();
    //   setPosts(data);
    // } else {
    //   alert('Error loading posts');
    // }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handleLike = async (postId) => {
    // const response = await fetch(`/api/Posts/${postId}/like`, {
    //   method: 'PUT',
    // });

    // if (response.ok) {
    //   getPosts();
    // } else {
    //   alert('Error liking post');
    // }
  };

  const handleDislike = async (postId) => {
    // const response = await fetch(`/api/Posts/${postId}/dislike`, {
    //   method: 'PUT',
    // });

    // if (response.ok) {
    //   getPosts();
    // } else {
    //   alert('Error disliking post');
    // }
  };

  return (
    <>

<div className="flex h-full">
<div className="items-center space-y-10 w-32 min-h-screen flex flex-col right-sidebar-container bg-gray-800 text-white p-4 border-l border-gray-600">
  <Link href="/LoginPage">
    <button className="bg-indigo-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2">Login</button>
  </Link>
  <Link href="/Register">
    <button className="bg-indigo-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2">Register</button>
  </Link>
  {/* <Link href="/logout">
    <button className="bg-indigo-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2">Logout</button>
  </Link> */}
</div>


  <div className="w-2/3 px-10 min-h-screen">
      <div className="bg-black text-white space-x-10">
       <div className="text-3xl font-bold mb-4 px-10 py-5 flex flex-row justify-between items-center">
        <div className="text-white">
          Posts
        </div>
        <div className="text-white">
        <Link href="/Search">Click to Search</Link>
        </div>
       </div>
        {posts.map((post, index) => (
           <div key={post._id} className="border-b border-white py-10">
             <h3 className="text-xl font-semibold mb-2">{post.username}</h3>
              <p className="text-base mb-4">{post.caption}</p>
               <div className="flex items-center space-x-10"> 
               <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleLike(post._id)} > Like </button>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDislike(post._id)} > Dislike </button>
                 </div>
                  <div className="mt-4">
                   <div className="flex justify-start">
                     <Link href={`/Posts/${post._id}`}>
                     <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"> Comment </button>
                      </Link>
                      </div>
                       </div>
                        </div>
                         ))}
                          </div>
        </div>
        <div className='w-1/3 px-10 min-h-screen'>
        <div className='flex justify-center'>
          <NewPost />
        </div>
        </div>
  </div>



    </>
  );
};

export default Posts;