# DevTinder Project -Authentication, JWT & Cookies

## Code Demonstration Link

* [DevTinder Backend Repository](https://github.com/akshadjaiswal/devTinder-backend)

ookies

## Overview
This document details the authentication process in the DevTinder app, focusing on JSON Web Tokens (JWT), cookie management, and security best practices. Understanding these concepts ensures secure user authentication and efficient session management.

---

## 1. Authentication

### Key Concepts:
- Authentication verifies the user's identity by matching the email and password with database records.
- Upon successful login:
  1. The server generates a **JWT token**.
  2. The token is sent back to the client and stored in a **cookie**.
  3. Subsequent requests use the token for validation.

---

## 2. Cookies

### What are Cookies?
- Cookies are small pieces of data stored on the client-side and sent to the server with every request.

### JWT in Cookies
- Storing JWT tokens in cookies ensures that the server can validate user sessions without relying on client-side storage like `localStorage`.
- **Validation**:
  - Every request includes the token stored in cookies, allowing the server to verify its authenticity.

### Cookie Expiry
- Cookies can have an expiration time to enforce session time limits, improving security and user control.

---

## 3. JWT (JSON Web Tokens)

### Key Steps in Authentication Using JWT:
1. **Password Validation**:
   - After verifying the email and password, proceed to generate a JWT.
   
2. **Token Creation**:
   - A JWT token is created using the `jsonwebtoken` package with `jwt.sign`.
   - The token includes:
     - **Header**: Information about the token type and signing algorithm.
     - **Payload**: Contains user-specific data (e.g., user ID).
     - **Signature**: Ensures the token’s integrity.
```javascript
 //create a jwt token
    const token = await jwt.sign({ _id: user._id }, "999@Akshad", { expiresIn: "1d" })
```
3. **Sending Token in Cookies**:
   - The generated token is added to cookies and sent back to the user as part of the response.

---

## 4. `res.cookie` Method

### Cookie Setup:
- The `res.cookie` method is used to send cookies from the server to the client.
- **Setup**:
  - Install `cookie-parser` middleware to parse and manage cookies easily.
- Cookies can include settings like:
  - **Expiration Time**: Defines when the cookie will expire.
  - **HTTPOnly**: Ensures cookies are inaccessible via client-side scripts, reducing XSS risks.

```javascript
    res.cookie("token", token, { expires: new Date(Date.now() + 8 * 3600000) })
```

---

## 5. JWT.io

### Understanding JWT Components:
1. **Header (Red)**:
   - Contains metadata about the token, such as type (`JWT`) and signing algorithm (e.g., `HS256`).

2. **Payload (Purple)**:
   - Contains claims, which are statements about the user (e.g., user ID).

3. **Signature (Blue)**:
   - Verifies that the token was not tampered with and is signed by the server.

---

## 6. Security Concepts

### Cookie Hijacking or Stealing
- **Definition**:
  - Attackers can intercept or steal cookies via network vulnerabilities or client-side attacks.
- **Mitigation**:
  - Use `Secure` and `HTTPOnly` attributes for cookies.
  - Implement HTTPS to encrypt cookie transmission.
  - Rotate tokens periodically to limit exposure.

---

## 7. Middleware: `UserAuthentication`

### Purpose:
- Verifies the JWT token sent in cookies for every protected route.
- Ensures only authenticated users can access restricted resources.

### Process:
- The middleware uses `jwt.verify` to validate the token.
- If the token is invalid or missing, the request is denied with an appropriate error response.

```javascript
const jwt = require("jsonwebtoken")
const User = require("../Models/user")
const userAuth = async (req, res, next) => {
    try {
        const { token } = req.cookies
        if (!token) {
            throw new Error("Not a Vaid token !!")
        }

        const deocodedObj = await jwt.verify(token, "999@Akshad")
        const { _id } = deocodedObj;

        const user = await User.findById(_id);
        if (!user) {
            throw new Error("User Not Found")
        }
        req.user= user;
        next();
    } catch (err) {
        res.status(400).send("ERROR : " + err.message)
    }
}
module.exports = {
    userAuth
}
```

---