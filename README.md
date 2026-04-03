Finance Data Processing and Access Control Backend
Overview

This project implements a backend system for managing financial data with role-based access control. It is designed to simulate how different users interact with financial records in a dashboard environment, depending on their permissions.

Features
User authentication using JWT
Role-based access control (Viewer, Analyst, Admin)
CRUD operations for financial records
Basic dashboard summary APIs
Lightweight in-memory data storage for simplicity
Tech Stack
Node.js
Express.js
JSON Web Tokens (JWT)

Project Structure

The project is organized into clear layers to separate concerns:

controllers - handles request logic
models - manages data structure (in-memory)
routes - defines API endpoints
middleware - authentication and role checks
Roles and Permissions
Viewer: can only view records and dashboard data
Analyst: can view records and insights
Admin: has full access, including create, update, and delete operations

API Endpoints
Authentication
POST /auth/register - create a user
POST /auth/login - authenticate and receive token
Records
GET /records - fetch all records
POST /records - create a record (Admin only)
PUT /records/:id - update a record (Admin only)
DELETE /records/:id - delete a record (Admin only)
Dashboard
GET /dashboard/summary - returns total income, expenses, and net balance

Note

For the purpose of this assignment, the application uses in-memory storage instead of a database. This keeps the setup simple while still demonstrating backend logic and API design.

Running the Project
npm install
npm start
Deployment

The project can be deployed on platforms like Render if needed.

Author
Mohith Krishna
