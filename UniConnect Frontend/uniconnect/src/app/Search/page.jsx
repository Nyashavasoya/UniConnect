"use client"
import SearchPage from '@/components/SearchPage'
import React from 'react'
import { fetchPosts } from '@/utils/api'
import { useState, useEffect } from 'react'

const Search= () => {
const [posts, setPosts] = useState([]);

useEffect(() => {
    const fetchedData = async () => {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
    }
    fetchedData();
}, [])

    
  return (
    <div>
      <SearchPage posts={posts}/>
    </div>
  )
}

export default Search


