Here's a README.md file for your repository based on the API testing screenshots you provided.


---

README.md

# API Testing with Postman


This repository contains API request tests for fetching posts from a local backend server (localhost:3000). The tests include fetching *latest, **trending, and **popular* posts.

## API Endpoints

### 1. Fetch Latest Posts
*Request:*

GET http://localhost:3000/posts?type=latest

## API Endpoints


GET http://localhost:3000/posts?type=latest

Response:

Returns the latest posts from the server.





---

2. Fetch Trending Posts

Request:

GET http://localhost:3000/posts

Response:

Returns trending posts.





---

3. Fetch Popular Posts

Request:

GET http://localhost:3000/posts?type=popular

Response:

Returns popular posts.





---

Tools Used

Postman: API testing and response validation.

Express.js (Backend Framework): Used for handling API requests (assumed based on API structure).

JSON Response Handling: API responses are structured in JSON format.


How to Use

1. Clone the repository:

git clone https://github.com/your-username/your-repo.git


2. Open Postman and import the API requests.


3. Start your backend server (localhost:3000).


4. Send requests to the endpoints and verify responses.




