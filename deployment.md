# Deployment Guide

This guide provides instructions on how to deploy the MERN stack portfolio.

## 1. Prerequisites
- A MongoDB cluster (e.g., MongoDB Atlas).
- Accounts on Vercel/Netlify (for Frontend) and Render/Heroku (for Backend).
- GitHub repository with your project code.

## 2. Backend Deployment (Render)

1. Create a new **Web Service** on Render and connect your GitHub repository.
2. Set the Root Directory to `backend`.
3. Set the Build Command to `npm install`.
4. Set the Start Command to `node server.js`.
5. **Environment Variables**:
   Add the following environment variables in Render:
   - `PORT`: (Render will set this automatically, but you can set it).
   - `MONGODB_URI`: Your MongoDB Atlas connection string.
6. Click **Deploy**.
7. Once deployed, copy your backend URL (e.g., `https://my-portfolio-api.onrender.com`).

## 3. Frontend Deployment (Vercel)

1. Before deploying the frontend, update the API URL. 
   In `frontend/src/components/Projects.jsx` and `Contact.jsx`, change `http://localhost:5000/api/...` to your new deployed backend URL.
   *(Best practice: Use an environment variable like `import.meta.env.VITE_API_URL`)*
2. Log into Vercel and **Add New Project**.
3. Import your GitHub repository.
4. Set the Framework Preset to **Vite**.
5. Set the Root Directory to `frontend`.
6. Click **Deploy**.

## 4. Final Verification
- Visit your frontend Vercel URL.
- Test the dark/light mode.
- Submit the contact form to ensure the backend is receiving the data and saving it to MongoDB.
