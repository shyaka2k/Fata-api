const express = require('express');
const db = require('./config/db');
const authRoutes = require('../routes/auth');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
// Routes
app.use('/api/auth', authRoutes);

// Test route
app.get('/', (req, res) => res.send('FATA Backend is running!'));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
