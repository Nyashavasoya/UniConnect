export async function fetchPosts() {
    const res = await fetch('http:/localhost:/4000/posts');
    const posts = await res.json();
    return posts;
  }  