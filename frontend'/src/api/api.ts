import axios from "axios";

const BASE_URL = "http://20.244.56.144/test";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getAuthToken = () => localStorage.getItem("authToken") || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNTcwMjA0LCJpYXQiOjE3NDI1Njk5MDQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjQ3ODk2OTYyLTcxMjgtNGE3Mi1hZjkxLTkzYjUzMWI1MzdlZCIsInN1YiI6ImthcmFuLjIyMDExNDVlY0BpaWl0YmguYWMuaW4ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6IjQ3ODk2OTYyLTcxMjgtNGE3Mi1hZjkxLTkzYjUzMWI1MzdlZCIsImNsaWVudFNlY3JldCI6Ik1kQXBlVHZvUGFtQnNWemMiLCJvd25lck5hbWUiOiJLYXJhbiIsIm93bmVyRW1haWwiOiJrYXJhbi4yMjAxMTQ1ZWNAaWlpdGJoLmFjLmluIiwicm9sbE5vIjoiMjIwMTE0NWVjIn0.AoJupHKtF9XJPV3tdOM713C3zIoYNGc8rVyQ0VRnWPQ";

// Fetch Feed Data
export const fetchFeed = async (authToken: string) => {
  const response = await apiClient.get("/users", {
    headers: { Authorization: getAuthToken() },
  });
  return response.data;
};

// Fetch Top Users Data
export const fetchTopUsers = async (authToken: string) => {
  const response = await apiClient.get("/top-users", {
    headers: { Authorization: authToken },
  });
  return response.data;
};

// Fetch Trending Posts Data
export const fetchTrendingPosts = async (authToken: string) => {
  const response = await apiClient.get("/trending-posts", {
    headers: { Authorization: authToken },
  });
  return response.data;
};
