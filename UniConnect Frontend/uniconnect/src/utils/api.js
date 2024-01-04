import axios from "axios";

export async function fetchPosts() {
  try {
    const response = await axios.get('http://localhost:4000/api/post');
    return response.data.allPosts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}