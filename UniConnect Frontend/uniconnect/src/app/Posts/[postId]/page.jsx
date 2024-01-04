"use client"
import { useSearchParams } from 'next/navigation';
import { fetchPosts } from '@/utils/api';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";


const PostPage = () => {

  const {postId} = useSearchParams();
  const [post, setPost] = useState({});
  const [newComment, setNewComment] = useState('');
  useEffect(() => {
    const handlePost = async () => {
      const fetchedPosts = await fetchPosts();
      setPost(fetchedPosts.find((p) => p.id === postId));
    }
  
    handlePost();  
  }, [post,newComment]);


  const handleComment = async (postId) => {
    if (newComment.trim() === '') {
      return;
    }

    const response = await axios.post(`http://localhost:4000/api/post/${postId}/comment`, {
       comment: newComment
   });
    

    if (response) {
      setNewComment('');
    } else {
      alert('Error commenting on post');
    }
  };

  const handleLike = async (postId) => {
    const response = await axios.get(`http://localhost:4000/api/post/${postId}/like`);

    if (response) {
    } else {
      alert('Error liking post');
    }
  };

  const handleDislike = async (postId) => {
    const response = await axios.get(`http://localhost:4000/api/post/${postId}/dislike`);

    if (response) {
    } else {
      alert('Error disliking post');
    }
  };


  return (
    <>
    <div key={post._id} className="border-b border-white py-10 space-x-10">
          <h3 className="text-6xl font-semibold mb-2 pl-10">{post.title}</h3>
          <p className="text-base mb-4">{post.caption}</p>
          <div className="flex items-center space-x-10">
            <GrLike fontSize={24} onClick={() => handleLike(post._id)} />
            <span>{post.likes}</span>
            <GrDislike fontSize={24} onClick={() => handleDislike(post._id)} />
            <span>{post.dislikes}</span>
          </div>
          <div className="mt-4">
              {post.comments ? (
                <>
                {post.comments.map((comment, index) => (
                  <div key={index} className="mb-2 p-2 rounded-lg text-white bg-gray-800 w-auto">
                      {comment}
                  </div>
              ))}
              <div className="flex mt-2 text-black">
                  <div className="flex mt-2 text-black space-x-10">
                      <input
                          type="text"
                          placeholder="Add a comment..."
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          className=" w-full border border-gray-300 rounded px-3 py-2 text-white bg-gray-800" />
                      <button
                          onClick={() => handleComment(post._id)}
                          className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                      >
                          Post
                      </button>
                  </div>
              </div>
                </>
                ) : (
                  <div className="flex mt-2 text-black">
                  <div className="flex mt-2 text-black space-x-10">
                      <input
                          type="text"
                          placeholder="Add a comment..."
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          className=" w-full border border-gray-300 rounded px-3 py-2 text-white bg-gray-800" />
                      <button
                          onClick={() => handleComment(post._id)}
                          className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                      >
                          Post
                      </button>
                  </div>
              </div>
              )}
          </div>
      </div>
          </>
   
  );
};


export default PostPage;