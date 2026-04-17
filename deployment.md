# 🚀 Vercel Deployment Guide (MERN)

This guide explains how to deploy both your **Frontend** and **Backend** to Vercel.

---

## 1. Prepare Backend
I have already:
- Created `backend/vercel.json`.
- Updated `backend/server.js` to export the app.

## 2. Deploy Backend to Vercel
1. Log in to [Vercel](https://vercel.com).
2. Click **Add New...** -> **Project**.
3. Import your GitHub repo `PortfolioParvesh`.
4. **Configuration:**
   - **Root Directory:** Select `backend`.
   - **Environment Variables:**
     - `EMAIL_USER`: `parveshmehla13@gmail.com`
     - `EMAIL_PASS`: `kwfaubluizhkabeo`
     - `NODE_ENV`: `production`
5. Click **Deploy**.
6. **Copy the Backend URL** (e.g., `https://portfolio-backend-abc.vercel.app`).

## 3. Deploy Frontend to Vercel
1. Go back to Vercel Dashboard -> **Add New...** -> **Project**.
2. Import the same repo.
3. **Configuration:**
   - **Root Directory:** Select `frontend`.
   - **Framework Preset:** Vite.
   - **Environment Variables:**
     - `VITE_API_URL`: (Paste your Backend URL from Step 2)
4. Click **Deploy**.

## 4. Final Steps
- Push your latest code changes to GitHub:
  ```bash
  git add .
  git commit -m "Configure for Vercel deployment"
  git push
  ```
- Visit your frontend URL and test the Contact Form!

