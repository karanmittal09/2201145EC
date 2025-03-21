import React from "react";

interface PostCardProps {
  user: string;
  content: string;
  comments: number;
}

const PostCard: React.FC<PostCardProps> = ({ user, content, comments }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h3 className="text-lg font-semibold">{user}</h3>
      <p className="text-gray-700">{content}</p>
      <p className="text-sm text-gray-500">Comments: {comments}</p>
    </div>
  );
};

export default PostCard;
