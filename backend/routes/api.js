const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const Message = require('../models/Message');
const nodemailer = require('nodemailer');

// Get all projects
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Submit contact form
router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Attempt to save to database first
    const mongoose = require('mongoose');
    if (mongoose.connection.readyState === 1) {
      const newMessage = new Message({ name, email, message });
      try {
        await newMessage.save();
      } catch (dbErr) {
        console.error('Error saving to DB (continuing to email):', dbErr);
      }
    } else {
      console.warn('MongoDB not connected, skipping DB save for contact message.');
    }

    // Send email using Nodemailer
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail', // Change this to your provider if not using Gmail
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send notification to yourself
        subject: `New Portfolio Contact from ${name}`,
        text: `You have a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
        replyTo: email
      };

      await transporter.sendMail(mailOptions);
    } else {
      console.warn('Nodemailer credentials not provided in .env. Skipping email sending.');
    }

    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Contact form error:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
