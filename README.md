# E-Commerce Store

Full-stack e-commerce project with a Node.js/Express API backend and a static HTML/CSS frontend.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [MongoDB Atlas](https://www.mongodb.com/atlas) account (or a local MongoDB instance)

## Project Structure

```
Ecommerce-Store/
├── backend/          # Express API server
│   ├── models/       # Mongoose models (User, Product, Order)
│   ├── routes/       # API routes (auth, products, orders)
│   ├── middleware/   # Auth middleware
│   └── server.js     # Entry point
├── frontend/         # Static HTML pages
│   ├── css/
│   ├── index.html
│   ├── products.html
│   ├── login.html
│   ├── register.html
│   ├── cart.html
│   └── admin.html
└── package.json
```

## First Run Setup

### 1. Install dependencies

From the project root:

```bash
npm install
```

### 2. Configure environment variables

Create or update `backend/.env` with your MongoDB connection details:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 3. Start the backend API

```bash
cd backend
node server.js
```

You should see:

- `MongoDB URI loaded`
- `MongoDB Atlas Connected`
- `Server running on port 5000`

### 4. Start the frontend (new terminal)

From the project root:

```bash
npx serve frontend -l 3000
```

### 5. Open in browser

| Service   | URL                        |
|-----------|----------------------------|
| Frontend  | http://localhost:3000      |
| Backend   | http://localhost:5000      |

## Commands

### Install dependencies

```bash
npm install
```

### Run backend (production)

```bash
cd backend
node server.js
```

### Run backend (development with auto-reload)

```bash
cd backend
npx nodemon server.js
```

### Run frontend

```bash
npx serve frontend -l 3000
```

### Run both (two terminals)

**Terminal 1 — Backend:**

```bash
cd backend && node server.js
```

**Terminal 2 — Frontend:**

```bash
npx serve frontend -l 3000
```

## API Endpoints

| Method | Endpoint          | Description        |
|--------|-------------------|--------------------|
| —      | `/api/auth`       | User authentication |
| —      | `/api/products`   | Product management  |
| —      | `/api/orders`     | Order management    |
| GET    | `/`               | API health check    |

## Tech Stack

- **Backend:** Node.js, Express, Mongoose, JWT, bcryptjs
- **Frontend:** HTML, CSS
- **Database:** MongoDB
