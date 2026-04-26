const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/smart-yield')
  .then(() => console.log('✓ MongoDB connected'))
  .catch(err => console.log('✗ MongoDB connection error:', err));

// API Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/crops', require('./routes/crops'));
app.use('/api/fertilizers', require('./routes/fertilizers'));
app.use('/api/queries', require('./routes/queries'));
app.use('/api/weather', require('./routes/weather'));
app.use('/api/users', require('./routes/users'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Smart Yield API Server',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      crops: '/api/crops',
      fertilizers: '/api/fertilizers',
      queries: '/api/queries',
      weather: '/api/weather',
      users: '/api/users',
      health: '/api/health',
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false,
    message: 'Route not found',
    path: req.path 
  });
});

// Error handling middleware
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Smart Yield Server listening on port ${PORT}`);
  console.log(`📍 http://localhost:${PORT}`);
  console.log(`📚 API Documentation: http://localhost:${PORT}`);
});