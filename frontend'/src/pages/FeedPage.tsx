import { useEffect, useState } from "react";
import { fetchFeed } from "../api/api";

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
}

const FeedPage = () => {
  const [feed, setFeed] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authToken = "your-auth-token-here";
    fetchFeed(authToken)
      .then((data: Post[]) => setFeed(data))  // ✅ Fix: Explicit type
      .catch((err: Error) => console.error("Feed API Error:", err)) // ✅ Fix: Explicit type
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center text-blue-700">📜 Latest Feed</h2>
      {loading ? <p className="text-center mt-4">Loading...</p> : (
        <div className="grid gap-6 mt-6">
          {feed.map((post) => (
            <div key={post.id} className="p-4 border rounded-lg shadow-md bg-white">
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-gray-600">{post.content}</p>
              <p className="text-sm text-right text-gray-500">— {post.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeedPage;
