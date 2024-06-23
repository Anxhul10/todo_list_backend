# Steps to Run This Program

## Handlers: [GET, PUT, POST, DELETE]

1. **Open your preferred IDE (Integrated Development Environment).**
2. **Navigate to your project directory in the terminal or command prompt.**
3. **Install required dependencies:**
   - Run the following commands:
     ```
     npm install express
     npm install body-parser
     ```

4. **Install Postman:**
   - Download and install [Postman](https://www.postman.com/).

5. **Configure Postman:**
   - Open Postman and select the HTTP method (GET, PUT, POST, DELETE).

6. **Send a POST request:**
   - Set the request URL to `http://localhost:3000`.
   - Select `raw` and `JSON` format in the body tab.
   - Input JSON data, e.g., `{"title": "github"}`.

7. **Check if data is added:**
   - Send a GET request to `http://localhost:3000/` in Postman.

Enjoy exploring your Express.js server with CRUD operations!

