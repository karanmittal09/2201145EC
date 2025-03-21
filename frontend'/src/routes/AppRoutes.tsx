import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import FeedPage from "../pages/FeedPage";
import TopUsersPage from "../pages/TopUsersPage";
import TrendingPostsPage from "../pages/TrendingPostsPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/feed" replace />} />
      <Route path="/feed" element={<FeedPage />} />
      <Route path="/top-users" element={<TopUsersPage />} />
      <Route path="/trending-posts" element={<TrendingPostsPage />} />
    </Routes>
  );
};

export default AppRoutes;
