import { useEffect, useState } from "react";
import { fetchTopUsers } from "../api/api";

interface User {
  id: string;
  name: string;
  score: number;
}

const TopUsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authToken = "your-auth-token-here";
    fetchTopUsers(authToken)
      .then((data: User[]) => setUsers(data))  // ✅ Fix: Explicit type
      .catch((err: Error) => console.error("Users API Error:", err)) // ✅ Fix: Explicit type
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center text-indigo-700">👑 Top Users</h2>
      {loading ? <p className="text-center mt-4">Loading...</p> : (
        <ul className="mt-6 space-y-4">
          {users.map((user, index) => (
            <li key={user.id} className="p-4 border rounded-lg shadow-md bg-white flex justify-between">
              <span className="font-semibold">{index + 1}. {user.name}</span>
              <span className="text-blue-600 font-bold">⭐ {user.score}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TopUsersPage;
