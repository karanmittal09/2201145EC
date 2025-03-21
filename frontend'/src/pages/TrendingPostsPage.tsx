import { useEffect, useState } from "react";
import { fetchTrendingPosts } from "../api/api";

interface Post {
  id: string;
  title: string;
  likes: number;
}

const TrendingPostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authToken = "your-auth-token-here";
    fetchTrendingPosts(authToken)
      .then((data: Post[]) => setPosts(data))  // ✅ Fix: Explicit type
      .catch((err: Error) => console.error("Trending API Error:", err)) // ✅ Fix: Explicit type
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center text-purple-700">🔥 Trending Posts</h2>
      {loading ? <p className="text-center mt-4">Loading...</p> : (
        <div className="grid gap-6 mt-6">
          {posts.map((post) => (
            <div key={post.id} className="p-4 border rounded-lg shadow-md bg-white">
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-sm text-gray-500">❤️ {post.likes} Likes</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrendingPostsPage;
