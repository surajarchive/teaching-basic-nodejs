# Teaching Basic Node.js & Express

![Diagram](diagram.png)

A comprehensive guide to learning Node.js and Express.js fundamentals with hands-on examples.

## Table of Contents
- [Getting Started](#getting-started)
- [Chapter 1: File Operations](#chapter-1-file-operations)
- [Chapter 2: Express.js Basics](#chapter-2-expressjs-basics)
- [Chapter 3: Sessions & Authentication](#chapter-3-sessions--authentication)
- [Chapter 4: Advanced Topics](#chapter-4-advanced-topics)

---

## Getting Started

### Step 1: Initialize Your Project

```bash
npm init -y
```

This creates a `package.json` file with default settings.

### Step 2: Install Dependencies

```bash
npm install express express-session cookie-parser
```

### Step 3: Configure ES Modules

Add this to your `package.json`:
```json
"type": "module"
```

---

## Chapter 1: File Operations

Learn CRUD operations (Create, Read, Update, Delete) with the Node.js `fs` module.

### Example: `file-ops.js`

**Create a File**
```javascript
import fs from 'fs';

fs.writeFile("parna.txt", "Hello parna", (err) => {
    if(err) throw err;
    console.log("File created");
});
```

**Read a File**
```javascript
fs.readFile("parna.txt", 'utf-8', (err, data) => {
    if(!err) {
        console.log(data);
    } else {
        console.log(err);
    }
});
```

**Update a File**
```javascript
fs.appendFile("parna.txt", "\n How are you?", (err) => {
    if(err) throw err;
    console.log("File updated");
});
```

**Delete a File**
```javascript
fs.unlink("parna.txt", (err) => {
    if(err) throw err;
    console.log("File deleted");
});
```

### 📝 Key Concepts
- Asynchronous file operations
- Error handling with callbacks
- CRUD operations on files

---

## Chapter 2: Express.js Basics

Build your first web server with Express.js!

### Example: `app.js`

**Basic Server Setup**
```javascript
import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to my server");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
```

**Route Parameters**
```javascript
app.get('/:name', (req, res) => {
    const {name} = req.params;
    res.send(`Welcome to ${name} page`);
});
```

**Query Parameters - File Creation**
```javascript
app.get("/sign", (req, res) => {
    const {file, content} = req.query;
    fs.writeFile(file, content, (err) => {
        if (err) throw err;
        console.log("file created");
    });
    res.send("File is created");
});
```

**Query Parameters - File Rename**
```javascript
app.get("/rename", (req, res) => {
    const {oldFile, newFile} = req.query;
    fs.rename(oldFile, newFile, (err) => {
        if (err) throw err;
        console.log("file renamed");
    });
    res.send("File renamed successfully");
});
```

### 📝 Key Concepts
- Setting up Express server
- Route handling (GET requests)
- Route parameters (`req.params`)
- Query parameters (`req.query`)
- Integrating file operations with Express

---

## Chapter 3: Sessions & Authentication

Learn how to handle user registration, login, and sessions.

### Example: `cookies.js`

**Setup Middleware**
```javascript
import session from 'express-session';
import express from 'express';

const app = express();
app.use(express.json());

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
```

**User Registration**
```javascript
const db = [];
let id = 0;

app.post('/register', (req, res) => {
    try {
        const {name, email, password} = req.body;
        const user = {id: ++id, name, email, password};
        db.push(user);
        res.status(201).send({message: "User registered successfully"});
    } catch (error) {
        res.status(500).send({message: "Internal Server Error"});
    }
});
```

**User Login with Cookie**
```javascript
app.post("/login", (req, res) => {
    try {
        const {email, password} = req.body;
        const user = db.find(x => x.email === email && x.password === password);
        
        if (!user) {
            res.status(401).send({message: "Invalid email or password"});
        }
        
        const token = user.id + "-" + new Date().getTime();
        res.cookie("token", token, {httpOnly: true});
        res.send({message: "Login successful"});
    } catch (error) {
        res.status(500).send({message: "Internal Server Error"});
    }
});
```

### 📝 Key Concepts
- Express middleware (`express.json()`)
- Sessions management
- Cookies (httpOnly)
- POST requests
- Request body parsing
- Basic authentication flow
- Error handling with try-catch
- HTTP status codes (201, 401, 500)

---

## Chapter 4: Advanced Topics

### Compression with Zlib

```javascript
import zlib from "zlib";
import { promisify } from "util";

const gzip = promisify(zlib.gzip);
const gunzip = promisify(zlib.gunzip);
```

### 📝 Key Concepts
- Data compression
- Promisify for async/await
- Working with Node.js built-in modules

---

## Running the Examples

### Run File Operations
```bash
node file-ops.js
```

### Run Express Server
```bash
node app.js
```

Then visit: `http://localhost:3000`

### Run Authentication Server
```bash
node cookies.js
```

Test with tools like Postman or curl:
```bash
# Register
curl -X POST http://localhost:3000/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","password":"password123"}'

# Login
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

---

## Learning Outcomes

After completing this tutorial, students will understand:
- ✅ Node.js file system operations (CRUD)
- ✅ Setting up Express.js server
- ✅ Routing and request handling
- ✅ Middleware usage
- ✅ Session management
- ✅ Cookie-based authentication
- ✅ HTTP methods (GET, POST)
- ✅ Error handling
- ✅ Working with request parameters and body

---

## Project Structure

```
teaching-basic-nodejs/
├── app.js              # Express basics & file operations
├── cookies.js          # Authentication & sessions
├── file-ops.js         # File CRUD operations
├── zip.js              # Compression utilities
├── package.json        # Project dependencies
├── diagram.png         # Visual reference
└── README.md           # This file
```

---

## Additional Resources

- [Node.js Documentation](https://nodejs.org/docs/)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [MDN Web Docs - HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)

---

**Happy Learning! 🚀**

