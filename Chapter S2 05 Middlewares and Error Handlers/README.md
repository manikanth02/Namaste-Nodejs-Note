# DevTinder Project - Learning Notes

## Middlewares and Error Handlers in Express

## Route Handlers in Express

### Overview
In Express, route handlers are functions that handle requests to a specific endpoint. You can use multiple route handlers for a single route, control the flow with `next`, and even wrap handlers into arrays for better modularity.

### 1. Multiple Route Handlers
- Express allows defining multiple route handlers for a single route. Each handler can execute different logic or perform different tasks before sending a response.
- Example:
  ```javascript
  app.get('/example', (req, res, next) => {
    console.log('First handler');
    next(); // Pass control to the next handler
  }, (req, res) => {
    res.send('Second handler');
  });
  ```
- In the above example:
 - The first handler logs a message and then calls next().
 - The second handler sends a response after the first one completes

## Understanding `next` and `next()` in Express

### Overview
In Express, `next` is a callback function that allows you to control the flow of middleware functions and route handlers. It helps in moving the request to the next middleware or route handler in the stack.

### 1. What is `next`?
- `next` is a function provided by Express, used to pass control to the next middleware function or route handler.
- It must be called within a middleware function for the request to proceed further.
- If not called, the request will be left hanging, and the server won't send a response.

### 2. How to Use `next()`
- **Basic Usage**:
  ```javascript
  app.get('/example', (req, res, next) => {
    console.log('First handler');
    next(); // Passes control to the next middleware function or route handler
  }, (req, res) => {
    res.send('Second handler');
  });
  ```

- In the above example:
 - The first function logs a message and then calls next() to proceed to the next handler.
 - The second function sends a response after the first handler completes

### 3.  Using `next()` to Skip Route Handlers in Express

In Express, you can use the `next()` function to pass control to the next middleware function or route handler. By passing the string `'route'` as an argument to `next()`, you can skip the remaining route handlers for a particular route.

### **How to Use `next('route')` to Skip Handlers**
- When `next('route')` is called, Express will skip the remaining handlers for the current route and move on to the next matching route handler.
- This is useful when certain conditions are met, and you want to bypass specific middleware or handlers.

- **Basic Usage**:
```javascript
app.get('/skip', (req, res, next) => {
  console.log('This handler will be skipped');
  next('route'); // Skips to the next matching route handler
}, (req, res) => {
  res.send('You will not see this response because the handler is skipped');
});

// Next matching route handler
app.get('/skip', (req, res) => {
  res.send('Skipped to this route handler');
});
```
- Here, the second handler will be skipped, and the request will be passed directly to the third handler.

## Middlewares in Express.js

### 1. What is Middleware?
- **Middleware** is a function that has access to the request (`req`), response (`res`), and the next middleware function in the request-response cycle.
- Middleware functions can:
  - Execute any code.
  - Modify the request and response objects.
  - End the request-response cycle by sending a response.
  - Call the next middleware function in the stack using `next()`.

### 2. Why Do We Need Middleware?
- **Modularity**: Middleware helps in separating concerns like authentication, logging, validation, etc., into reusable functions.
- **Pre-processing**: Middleware can be used to modify or check the request before it reaches the route handler.
- **Error Handling**: Middleware is essential for catching errors and handling them gracefully without stopping the application.
- **Authorization/Authentication**: Middleware ensures that only authorized users can access certain routes.
- **Request Logging**: Middleware can log request details for monitoring or debugging.

### 3. How Express.js Handles Middlewares Behind the Scenes
- When an HTTP request is received, Express executes all middleware functions in the order they are defined.
- Each middleware function can:
  - **Pass control** to the next middleware by calling `next()`.
  - **End the request-response cycle** by sending a response.
- Middleware functions are executed sequentially unless `next()` is invoked, which passes control to the next middleware or route handler.
- Behind the scenes, Express creates a **middleware stack** and processes it in order. If `next()` is not called, the request gets stuck and no further processing occurs.

### Example of Middleware Flow
```javascript
const express = require('express');
const app = express();

// Middleware 1: Request Logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass control to the next middleware
});
```
```javascript
// Middleware 2: Authorization Check
//Handle user authentication for all admin routes using middlewares
app.use("/admin", (req, res, next) => {
    const token = "999";
    const isAuthorizedAdmin = token === "999";
    if (!isAuthorizedAdmin) {
        res.status(401).send("Unauthorized Admin")
    } else {
        next();
    }
})
app.get("/admin/getAllData", (req, res) => {
    res.send("All data Generated")
})
app.get("/admin/deleteData", (req, res) => {
    res.send("Data Deleted")
})
app.listen(3000, () => console.log('Server is running on port 3000'));
```
