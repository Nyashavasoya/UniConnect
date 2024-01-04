export async function fetchPosts() {
    const res = await fetch('your-api-endpoint/posts');
    const posts = await res.json();
    return posts;
  }
  