# Diving into APIs

## Code Demonstration Link

* [DevTinder Backend Repository](https://github.com/akshadjaiswal/devTinder-backend)

This README serves as a reference for API concepts and operations encountered while developing the DevTinder app. It includes notes on data handling, database interactions, and key differences between JavaScript and JSON objects.

---

## Table of Contents
1. [JavaScript Object vs JSON Object](#javascript-object-vs-json-object)
2. [Receiving Data Through POST API](#receiving-data-through-post-api)
3. [Retrieving Users from the Database](#retrieving-users-from-the-database)

---

## 1. JavaScript Object vs JSON Object

### Key Differences

| Feature                         | JavaScript Object                                          | JSON (JavaScript Object Notation)                             |
|---------------------------------|------------------------------------------------------------|---------------------------------------------------------------|
| **Definition**                  | A collection of key-value pairs in JavaScript              | A text-based data format for representing structured data     |
| **Data Types Supported**        | Any JavaScript type (string, number, boolean, array, object, function, etc.) | Limited to strings, numbers, booleans, arrays, objects, and null |
| **Syntax**                      | Property names do not need to be in quotes                 | Property names must be in double quotes                       |
| **Usage**                       | Primarily used within JavaScript code for manipulation     | Commonly used for data interchange between systems            |
| **Parsing Requirement**         | Not required in JavaScript, as it's native                 | Needs `JSON.parse()` to convert to a JavaScript object        |
| **Stringification Requirement** | `JSON.stringify()` is used to convert to JSON format       | Already in string format, no conversion needed for transmission |
| **Functions Allowed**           | Can include functions as values                            | Does not support functions                                    |
| **Comments**                    | Can contain comments                                       | Does not allow comments                                       |

---

## 2. Receiving Data Through POST API

### Overview
The POST API is used to receive data from the client. In the DevTinder app, this data is often user information that needs to be stored in the database.

### Process
- **Step 1**: Set up a route that handles incoming POST requests.
- **Step 2**: Extract data from the request body. Ensure data validation and sanitize inputs to prevent issues such as SQL injection or XSS.
- **Step 3**: Once validated, structure the data appropriately before pushing it into the database.
- **Step 4**: Handle errors or success responses based on database operations to provide feedback to the client.

```javascript
app.use(express.json());
//signup api for signing the user
app.post("/signup", async (req, res) => {
    const data = req.body;
    const user = new User(data)

    try {
        await user.save();
        res.send("User added successfully")

    } catch (err) {
        res.status(400).send("Error in saving the user:" + err.message)
    }
})
```
---

## 3. Retrieving Users from the Database

### Overview
Fetching users from the database is essential for listing or displaying information on the frontend.

### Process
- **Step 1**: Set up a GET API route that triggers the database query for retrieving users.
- **Step 2**: Define query filters (if any) based on the request parameters. For example, you may want to fetch users with specific attributes.
- **Step 3**: Execute the query and structure the results before sending them back in the API response.
- **Step 4**: Ensure the response format is JSON, allowing the client to process and display data as needed.

```javascript
// Feed API - get all the users form the database
app.get("/feed", async (req, res) => {

    try {
        const users = await User.find({})
        if (users.length === 0) {
            res.send("No user found")
        } else {
            console.log(users);
            res.send(users)
        }
    }
    catch (err) {
        res.status(400).send("Something went wrong")
    }

})
```
---

This README is part of the DevTinder backend documentation. Expand upon these notes as you dive deeper into API handling and database management.
