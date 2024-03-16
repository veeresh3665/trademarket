// server.js

const express = require('express');
const connectDB = require('./config/db'); // Import the connectDB function
const app = express();

// Load environment variables from .env file
require('dotenv').config();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Middleware to parse JSON bodies

// Define routes
app.use('/api/users', require('./routes/userRoutes')); // Example user routes
app.use('/api/trades', require('./routes/tradeRoutes')); // Example trade routes
app.use('/api/portfolio', require('./routes/portfolioRoutes')); // Example portfolio routes
app.use('/api/orders', require('./routes/orderRoutes')); // Example order routes
app.use('/api/admin', require('./routes/adminRoutes')); // Example admin routes

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
