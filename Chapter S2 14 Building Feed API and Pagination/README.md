# DevTinder Project - API Development: Feed API and Pagination

## Code Demonstration Link

* [DevTinder Backend Repository](https://github.com/akshadjaiswal/devTinder-backend) Project
---

## Overview
Today's focus is on implementing the **Get /user/feed** API. This API fetches profiles of other users on the platform while ensuring that the logged-in user does not see specific profiles. The implementation involves filtering logic, MongoDB queries, and pagination for efficient data retrieval.


## API Details

### Endpoint:
- **GET `/user/feed`**

### Purpose:
- Fetch user profiles while excluding:
  - The logged-in user.
  - Existing connections.
  - Users who were ignored.
  - Users who have already received a connection request.

---

## Thought Process for API Development

### Steps:

1. **Filtering Users Using a Set Data Structure**:
   - Gather all user IDs related to the logged-in user:
     - **Connections** (users the logged-in user is connected with).
     - **Ignored Users** (users the logged-in user has chosen to ignore).
     - **Sent Requests** (users who already received a connection request).
   - Store these IDs in a `Set` to ensure uniqueness.

2. **Database Query Using MongoDB Operators**:
   - Use **$nin** (not in) to exclude users whose IDs exist in the `Set` from the database query.
   - Use **$ne** (not equal) to ensure the logged-in user’s profile does not appear in the feed.


---

## Key Concepts

### 1. **Filtering Data Efficiently**
- Using a `Set` ensures fast lookup times when filtering out user IDs from the database query.
- Reduces the number of unwanted results and improves API response times.

### 2. **MongoDB Query Optimization**
- **$nin**: Excludes multiple user IDs from the query results.
- **$ne**: Ensures that the logged-in user’s ID is not included in the query results.

---

## Benefits of This Approach

1. **Efficient Data Retrieval**:
   - The filtering logic ensures that only relevant profiles are shown to the user.

2. **Optimized Query Execution**:
   - The use of MongoDB comparison operators improves query efficiency and response times.


---

## Conclusion
The **Get /user/feed** API is designed to efficiently fetch user profiles while filtering out unwanted results. Using **Set-based filtering**, **MongoDB queries**,this API ensures a smooth and scalable user experience.
