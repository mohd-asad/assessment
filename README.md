# Image Search App
A full-stack image search web app built using the **MERN** stack with OAuth authentication (Google + GitHub).  
Users can search for high-quality images using the **Unsplash API**, view trending searches, and explore top search history.

## Tech Stack
Frontend: React (Vite) + Tailwind CSS
Backend: Express.js + Node.js
Database: MongoDB (Mongoose)
Auth: Passport.js (Google, GitHub, There was some error with facebook login on there side. I have attached the screenshot. I was not able sign In on there developers site)
Images: Unsplash API
Deployment: Render + Vercel

## Features
- Search and display images using the **Unsplash API**
- View **Top 5** searches (expandable to top 10)
- OAuth login with **Google** and **GitHub**
- Tracks search frequency and displays trending terms
- MongoDB for persistent storage
- Deployed on **Render (backend)** and **Vercel (frontend)**

## 🗂️ Folder Structure
image-search-project/
│
├── client/  # React frontend (Vite + Tailwind)
│ ├── api/axios.js # Axios instance 
│ ├── components/ # UI components (TopSearches,Header, History, ImageGrid, Login, ProtectedRoute etc.)
│ ├── context/AuthContext # Global Auth state
│ ├── pages/ # Page components(Home.jsx, NotFound.jsx)
│ └── main.jsx
│ └── package.json
│
├── server/                                       # Express + Node.js backend
│ ├── config/passport.js and db.js                # Passport OAuth strategies (Google/GitHub)
│ ├── models/Search.js and User.js                # Search model (stores queries + counts)
│ ├── routes/auth.js                              # Auth routes (/auth/google, /auth/me, etc.)
│ ├── routes/api.js                               # API routes (Unsplash search, top searches, History)
│ ├── server.js                                   # Main backend entry
│ ├── utils/unsplash.js                           # Unsplash Api
│ └── package.json
│ └── .env
├── .env
├── README.md
└── package.json

## ⚙️ Environment Variables (.env)
Create a `.env` file in both the **frontend** and **backend** directories.

MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/imageSearch
SESSION_SECRET=asad_secret
CLIENT_URL=https://your-frontend.vercel.app
UNSPLASH_ACCESS_KEY=your_unsplash_api_key

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

PORT=5000
NODE_ENV=production

## 🧑‍💻Local Setup Instructions

1️⃣ Clone the repo
git clone https://github.com/mohd-asad/assessment.git
cd assessment/image-search-project

2️⃣ Install dependencies
Backend
cd server
npm install

Frontend
cd ../src
npm install

3️⃣ Run locally
Start backend
npm start
# or
npx nodemon server.js

Start frontend
npm run dev

Frontend runs at: http://localhost:5173
Backend runs at: http://localhost:5000

## 🔐 OAuth Configuration
Authorized JavaScript origins:
https://your-frontend.vercel.app
http://localhost:5173

Authorized redirect URIs:
https://your-backend.onrender.com/auth/google/callback
http://localhost:5000/auth/google/callback

## 🧾 API Endpoints

Endpoint	                    Method	              Description
/auth/google	                 GET	                Redirects to Google login
/auth/github	                 GET	                Redirects to GitHub login
/auth/me	                     GET	                Returns current logged-in user
/auth/logout	                 POST	                Logs out and clears session
/api/search?query=<term>	     GET	                Fetches images from Unsplash API
/api/top-searches	GET	         Returns              top 10 searches (Top 5 shown on UI)

## Screenshots
<img width="960" height="485" alt="Screenshot 2025-11-05 231822" src="https://github.com/user-attachments/assets/b464a754-01d3-46bf-8fe8-dab3f7701cb1" />
<img width="952" height="446" alt="Screenshot 2025-11-05 231845" src="https://github.com/user-attachments/assets/9c3a11de-41eb-4ba2-a5af-e4f169a3386c" />
<img width="701" height="440" alt="Screenshot 2025-11-05 232004" src="https://github.com/user-attachments/assets/ff95d849-4696-47a5-b1d4-b827de7d304b" />
<img width="948" height="443" alt="Screenshot 2025-11-05 232051" src="https://github.com/user-attachments/assets/bb5fd2fb-d113-4798-bfda-8243297a530b" />
<img width="701" height="403" alt="Screenshot 2025-11-05 231940" src="https://github.com/user-attachments/assets/18040215-8e70-4199-9226-a393e4dc337a" />
Facebook Error
<img width="895" height="389" alt="Screenshot 2025-11-05 170519" src="https://github.com/user-attachments/assets/163ba4d0-3a1b-45f5-8206-f08ab068bac4" />






  
