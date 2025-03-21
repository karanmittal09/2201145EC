import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="m-b-10 w-full bg-opacity-80 backdrop-blur-lg bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white shadow-xl py-4 px-10 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-extrabold tracking-wider drop-shadow-md">
          <span className="text-yellow-300">Social</span> Analytics
        </h1>

        <div className="flex space-x-6">
          <Link
            to="/feed"
            className="px-5 py-2 rounded-full bg-white text-blue-700 font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-yellow-300 hover:text-gray-900"
          >
            📜 Feed
          </Link>
          <Link
            to="/top-users"
            className="px-5 py-2 rounded-full bg-white text-blue-700 font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-yellow-300 hover:text-gray-900"
          >
            👑 Top Users
          </Link>
          <Link
            to="/trending-posts"
            className="px-5 py-2 rounded-full bg-white text-blue-700 font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-yellow-300 hover:text-gray-900"
          >
            🔥 Trending
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
