# Online Notice Board Application

The "Online Notice Board" application is a robust platform for managing advertisements. It allows users to create, view, modify, and delete ads with various attributes, including title, description, tags, price, and more. Built using Node.js and Express, the application features secure operations and database integration.

## Features

### 1. Dynamic Port Configuration:
- The application’s port is configurable via environment variables for flexibility in deployment.

### 2. Heartbeat Endpoint:
- A `/heartbeat` endpoint returns the current date and time, ensuring the application is running smoothly.

### 3. Advertisement Management:
#### Adding Advertisements:
- Users can add new ads with details such as title, description, category, tags, price, and more.

#### Viewing Advertisements:
- A single ad can be retrieved in multiple formats (`text/plain`, `text/html`, or `application/json`) based on the `Accept` header.
- All advertisements can be listed collectively.

#### Modifying Advertisements:
- Users can update existing ads securely.

#### Deleting Advertisements:
- Ads can be removed, with access controlled by user permissions.

### 4. Search Functionality:
- Users can search for ads using various filters, including title, description, date range, and price range.

### 5. Database Integration:
- Advertisements are stored in a MongoDB database, ensuring reliability and scalability.

### 6. User Authentication and Authorization:
#### User-Specific Operations:
- The application supports three predefined users. Each user can delete or modify only the ads they have created.

#### Secure Modifications:
- Deleting or modifying ads requires authentication, with unauthorized attempts resulting in appropriate error messages and HTTP status codes.

### 7. Debug Mode:
- When launched with the `debug` parameter (e.g., `node app.js debug`), the application logs HTTP requests (method, URL, timestamp) to a text file for debugging purposes.

### 8. Custom 404 Response:
- Requests to non-existent endpoints return a static image instead of the default 404 error page.

### 9. Error Handling:
- Detailed error messages are logged to the console while clients receive user-friendly error responses and HTTP status codes.

### 10. Postman Documentation:
- A Postman collection is provided, showcasing example requests for all available endpoints, simplifying API testing and integration.

## Summary

The "Online Notice Board" application is a feature-rich platform for managing advertisements, offering secure, user-friendly, and scalable solutions. With robust functionalities, including database integration, user authentication, and advanced search, it serves as an efficient tool for organizing and accessing online notices.
