## Step 1: Set Up Project Folder Structure & Initialize Frontend and Backend

### Folder Structure

We will create a parent folder named `blog-project` containing two subfolders:

- `client` — React + TypeScript frontend
- `admin` — Express.js backend

---

### Commands to Create Folders and Initialize Projects

Open your terminal and run the following commands:

```bash
# Create parent folder and navigate into it
mkdir blog-project
cd blog-project

# Create frontend and backend folders
mkdir client admin
```

---

### Initialize Frontend (`client`)

I recommend using **Vite** for the frontend setup because it’s faster and more modern than Create React App, especially with TypeScript and TailwindCSS.

```bash
# Navigate to client folder
cd client

# Initialize Vite React + TypeScript project
npm create vite@latest . -- --template react-ts

# Install dependencies
npm install

# Install TailwindCSS and its dependencies
npm install -D tailwindcss postcss autoprefixer

# Initialize TailwindCSS config
npx tailwindcss init -p

# Install Zustand for state management
npm install zustand

# Install React Router for routing
npm install react-router-dom

# Install Firebase for authentication
npm install firebase

# Install React Query for efficient data fetching
npm install @tanstack/react-query

# (Optional but recommended) Install axios for API calls
npm install axios
```

---

### Initialize Backend (`admin`)

For the backend, we’ll use Express.js with TypeScript and SQLite as a lightweight local database.

```bash
# Navigate back to parent and then to admin folder
cd ../admin

# Initialize npm project
npm init -y

# Install Express and CORS for handling requests
npm install express cors

# Install Firebase Admin SDK for verifying Firebase tokens
npm install firebase-admin

# Install SQLite3 for local database
npm install sqlite3

# Install TypeScript and types for Node and Express
npm install -D typescript @types/node @types/express ts-node-dev

# Initialize TypeScript config
npx tsc --init
```

---

### Update Markdown Documentation

Create a `README.md` file in the parent folder (`blog-project`) to document the project setup and progress.

```bash
cd ..
echo "# Blog Project\n\n## Project Setup\n\n- Created folder structure with `client` and `admin`.\n- Initialized frontend with Vite (React + TypeScript + TailwindCSS).\n- Installed Zustand, React Router, Firebase, React Query, and axios in frontend.\n- Initialized backend with Express, SQLite, Firebase Admin SDK, and TypeScript.\n" > README.md
```

---

## Summary Prompt for Continuation

```
We have set up the project folder structure with `client` for frontend and `admin` for backend inside `blog-project`.
The frontend is initialized using Vite with React, TypeScript, TailwindCSS, Zustand, React Router, Firebase, React Query, and axios installed.
The backend is initialized with Express, CORS, Firebase Admin SDK, SQLite, and TypeScript configured.
A `README.md` file has been created to document the setup so far.

Next step: Configure TailwindCSS in the frontend, set up basic React Router routes and Firebase Authentication initialization.
On the backend, set up Express server with basic routes and Firebase token verification middleware.
```

---

---

# Step 2

## Project Setup

### Folder Structure

- `client` — React + TypeScript frontend
- `admin` — Express.js backend

### Frontend Setup (`client`)

- Initialized with Vite (React + TypeScript).
- TailwindCSS configured for styling.
- React Router set up with basic routes: Home, About, Contact, NotFound.
- Firebase Authentication initialized (Firebase config in `src/firebase.ts`).
- Installed Zustand, React Router, Firebase, React Query, axios.

### Backend Setup (`admin`)

- Initialized with Express.js and TypeScript.
- CORS and JSON middleware enabled.
- Firebase Admin SDK initialized for token verification.
- SQLite installed for local database.
- Middleware `verifyFirebaseToken` created to protect routes.
- Sample protected route `/protected` implemented.

## Next Steps

- Build authentication UI (SignUp, SignIn) in frontend.
- Connect frontend auth state with backend protected routes.
- Design blog post CRUD operations with SQLite backend.
- Implement state management with Zustand.


# Blog Project

## Homepage Design

- Matches the reference image exactly: large blog title, subtitle, featured post, and a grid of three secondary posts.
- Uses TailwindCSS for spacing, font weights, and rounded corners.
- Smooth fade/slide-in animations with Framer Motion.
- Responsive layout for mobile and desktop.
- Images and text are easily customizable.

## Next Steps

- Connect to backend for dynamic blog data.
- Make blog cards clickable for detail pages.
- Add pagination or infinite scroll for more posts.

