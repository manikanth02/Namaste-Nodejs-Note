# DevTinder Project - Data Sanitization and Schema Validations in Mongoose

## Code Demonstration Link

* [DevTinder Backend Repository](https://github.com/akshadjaiswal/devTinder-backend)

## Overview
In today's learning, I explored data sanitization and schema validation features in Mongoose. These features help enforce data integrity, improve data consistency, and add extra layers of validation to ensure that the data saved in MongoDB adheres to specific rules.

## Schema Types in Mongoose
Mongoose provides various schema types and properties that can be used to enforce data validation and sanitization. Key properties include:

### 1. `required`
- Ensures that a field must be provided before a document is saved.
```javascript
firstName: {
        type: String,
        `required: true,`
        minLength: 3,
        maxLenght: 50
    }
```

### 2. `unique`
- Specifies that the value in the field must be unique across the collection.
```javascript
emailId: {
        type: String,
        lowercase: true,
        required: true,
       ` unique: true,`
        trim: true
    }
```

### 3. `default`
- Sets a default value for a field if no value is provided.
```javascript
about: {
        type: String,
        `default: "Dev is in search for someone here"`
    }
```

### 4. `lowercase`
- Converts the string value to lowercase before storing it in the database.
```javascript
emailId: {
        type: String,
        `lowercase: true,`
        required: true,
        unique: true,
        trim: true
    }
```

### 5. `trim`
- Removes leading and trailing whitespace from a string before saving it.
```javascript
emailId: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
       ` trim: true`
    }
```

### 6. `minLength` and `maxLength`
- Ensures that the length of a string field falls within a specified range.
```javascript
firstName: {
        type: String,
        required: true,
        `minLength: 3,`
        `maxLenght: 50`
    }
```

### 7. `min` and `max`
- Sets minimum and maximum values for numerical fields.
```javascript
age: {
        type: Number,
        required: true,
        `min: 18`
    }
```

### 8. `validate`
- Allows for custom validation logic to be applied to a field. This can include custom functions for more complex validation needs.
```javascript
gender: {
        type: String,
        required: true,
        trim: true,
       ` validate(value) {
            if (!["male", "female", "others"].includes(value)) {
                throw new Error("Not a valid gender (Male , Female and other)")
            }
        }`
    }
```

### 9. `timestamps`
- Automatically adds `createdAt` and `updatedAt` fields to the schema, tracking when the document was created and last modified.
```javascript
{
   ` timestamps: true`
}
```

## Custom Validator Function
Custom validators can be used to enforce more complex validation logic. For example, a custom validator for the `age` field can ensure that only values meeting a specific condition are accepted.
```javascript
gender: {
        type: String,
        required: true,
        trim: true,
       ` validate(value) {
            if (!["male", "female", "others"].includes(value)) {
                throw new Error("Not a valid gender (Male , Female and other)")
            }
        }`
    }
```

## Conclusion
Schema validations and data sanitization in Mongoose provide powerful tools to maintain data quality and integrity. These features enable building robust applications by ensuring that only valid data is stored in the database, reducing the need for manual checks and potential data-related errors.
