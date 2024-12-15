require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');

// Import routes and models
const emailRoutes = require('./routes/emailRoutes');
const contactRoutes = require('./routes/contact');
const Email = require('./models/Email'); // Email model

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Environment variables
const dburl = process.env.dburl;
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit process if MongoDB connection fails
  });

// Default route for root URL
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

// API routes
app.use('/api/emails', emailRoutes);
app.use('/api/contact', contactRoutes);

// Email notification function
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function notifyUsers() {
  try {
    const users = await Email.find({});
    for (const user of users) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: user.email,
        subject: 'Nos produits électroniques sont prêts!',
        text: 'Nos nouveaux produits électroniques sont prêts. Visitez notre site pour en savoir plus!',
      });
    }
    console.log('Notification sent to all users');
  } catch (error) {
    console.error('Error notifying users:', error);
  }
}

// Uncomment this to manually trigger notifications
// notifyUsers();
