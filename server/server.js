// server/server.js

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const todoRoutes = require('./routes/todoRoutes'); // Import the routes

const app = express();
const PORT = process.env.PORT || 5001;

// --- Database Connection ---
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));


// --- Middleware ---
// This allows your server to accept JSON data in the request body
app.use(express.json());


// --- Routes ---
// Tell the server to use your todo routes for any URL starting with /api/todos
app.use('/api/todos', todoRoutes);


// --- Start Server ---
app.listen(PORT, () => {
  console.log(`✅ Server is running and listening on http://localhost:${PORT}`);
});