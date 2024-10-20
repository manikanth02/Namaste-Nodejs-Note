# DevTinder Project Development (LLD HLD)


## Development Approach
The DevTinder app is being built by following a structured development cycle similar to how projects are managed in a company. The process includes gathering requirements, high-level design (HLD), and low-level design (LLD).

### 1. Requirements Gathering
- **Understanding the Project**:
  - **Project Name**: DevTinder
  - **Concept**: A platform similar to Tinder, but specifically designed for developers to connect and collaborate.

- **Features**:
  1. **User Account Management**:
     - Create an account.
     - Signup and login functionality.
     - Update user profile.
  2. **Developer Exploration**:
     - Feed page to explore developer profiles.
     - Ability to send connection requests.
  3. **Connections Management**:
     - View matches (mutual connections).
     - List of sent and received requests.
     - Update profile information.
  4. **Additional Features**:
     - More features to be added according to development needs.

### 2. High-Level Design (HLD)
- **Tech Planning**:
  - **Architecture**: The app will follow a microservices architecture with separate services for the frontend and backend.
  - **Tech Stack**:
    - **Frontend**: React.js
    - **Backend**: Node.js
    - **Database**: MongoDB

- **Development Team Roles**:
  - Once the features and tech planning are finalized, the software development team comes into the picture, including SDE1, SDE2, and backend teams.

- **Note**:
  - Proper planning is essential, as it makes the development process smoother and coding easier.

### 3. Low-Level Design (LLD)
- **Database Design**:
  - **Collections**:
    1. **User**:
       - Fields: `firstname`, `lastname`, `email`, `password`, `age`, `gender`, etc.
    2. Profile 
  - Additional collections and relationships will be designed as needed.

## Next Steps
- Finalize the LLD and start implementing the database schema.
- Begin development of backend services, followed by the frontend.
- Iteratively add more features and enhance the design based on feedback.
