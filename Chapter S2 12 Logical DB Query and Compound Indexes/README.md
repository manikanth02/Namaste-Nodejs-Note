# DevTinder Project - Logical DB and Compound Indexes

## Code Demonstration Link

* [DevTinder Backend Repository](https://github.com/akshadjaiswal/devTinder-backend)

## Overview
Today's learning covers advanced concepts in MongoDB and Mongoose, including creating a connection request schema with strict validations, building an API to handle connection requests, and using `.pre` middleware for additional checks.

---

## 1. Connection Request Schema

### Key Features:
- **Schema Fields**:
  - `fromUserId`: The ID of the user sending the connection request.
  - `toUserId`: The ID of the user receiving the connection request.
  - `status`: The status of the request, restricted to specific values.

- **Status Validation**:
  - Only the following statuses are allowed:
    - `ignore`
    - `interested`
    - `accepted`
    - `rejected`
  - Any other value will throw a validation error using the `enum` type.

- **Custom Validators**:
  - Ensure only the predefined status values are accepted.
  - Provide meaningful error messages for invalid inputs.

---

## 2. API to Send Connection Requests

### Endpoint:
- **`POST /request/send/:status/:toUserId`**

### Key Validations:
1. **Allowed Statuses**:
   - Only "ignored" and "interested" statuses are allowed for this API.

2. **Duplicate Requests**:
   - Ensure that only one connection request can exist between two users, regardless of the direction (`fromUserId` to `toUserId` or vice versa).
   - If a request already exists, respond with a status indicating it was sent previously.

3. **Database Operation**:
   - Adds the `fromUserId`, `toUserId`, and `status` to the database upon successful validation.

---

## 3. `.pre` Middleware in Mongoose Schema

### Key Logic:
- **Prevent Self-Requests**:
  - Use `.pre` middleware in the Mongoose schema to validate that the `fromUserId` is not the same as the `toUserId`.
  - Throw an error if the condition (`fromUserId !== toUserId`) is not met.

### Benefits of Using `.pre` Middleware:
- Centralized validation logic directly within the schema.
- Ensures the database remains consistent by preventing invalid operations at the schema level.

---

## Conclusion
These enhancements improve the robustness of the DevTinder app by ensuring data integrity and adding meaningful validations. The use of enums, compound validations, and middleware demonstrates effective use of Mongoose and MongoDB features for scalable application development.
