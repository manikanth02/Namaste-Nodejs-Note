# Databse, Schema & Models | Mongoose

## Code Demonstration Link

* [DevTinder Backend Repository](https://github.com/akshadjaiswal/devTinder-backend)

## Overview
This guide demonstrates how to connect to MongoDB directly using a connection string URL without using a `.env` file. This setup is convenient for testing but is not secure for production as it exposes sensitive information.

## 1. Install Mongoose
Make sure Mongoose is installed in your project:
```bash
npm install mongoose
```

## 2. Database Connection code:

```javascript
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = 3000;

// MongoDB connection string URL
const databaseUrl = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority';

// Connect to MongoDB using Mongoose
mongoose.connect(databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server only after database connection is successful
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });
```

*`Important Note: Always ensure that the database connection is established before starting the server. This setup is best for development or testing but not for production, as it can expose credentials.`*