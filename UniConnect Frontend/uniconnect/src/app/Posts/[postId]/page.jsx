import { useRouter } from 'next/navigation';
import Post from '../../components/Post';

const PostPage = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return <Post post={post} />;
};

export async function getServerSideProps(context) {
  const { params } = context;
  const postId = params.postId;

  const apiUrl = `/api/Posts/${postId}`;
  const response = await fetch(apiUrl);

  if (!response.ok) {
    return {
      notFound: true,
    };
  }

  const post = await response.json();

  return {
    props: {
      post,
    },
  };
}

export default PostPage;