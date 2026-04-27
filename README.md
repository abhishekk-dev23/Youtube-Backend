# YouTube-Backend

A production-grade REST API backend for a video-sharing platform like Youtube, built with Node.js, Express, and MongoDB.

---

## What I Learned

- **Project structure** — How to organize a production-grade Express app (routes → controllers → models → utils)
- **Async error handling** — Building an `asyncHandler` HOF to eliminate try/catch in every route
- **Custom API response classes** — `ApiError` and `ApiResponse` for consistent JSON responses
- **JWT auth flow** — Implementing access + refresh token rotation with httpOnly cookies
- **Password hashing** — Using bcrypt pre-save Mongoose hooks
- **File upload pipeline** — Multer for temp disk storage → Cloudinary for cloud upload → cleanup local file
- **MongoDB aggregation pipelines** — `$lookup`, `$addFields`, `$project` for computing subscriber counts and populating watch history
- **Mongoose** — Schema design, virtuals, instance methods, plugins
- **Environment config** — dotenv, CORS setup, request body limits
- **API Documentation** — Implementing **Swagger UI** with `swagger-autogen` for automated documentation and organized endpoint sectioning
- **Deployment Prep** — Configuring dynamic hosts, CORS origins, and security headers for production readiness
- **Git Workflow** — Version control with clean commits and remote synchronization

---

## 📂 Project Structure

```text
src/
├── controllers/    # Request handling & business logic
├── db/             # Database connection setup
├── middlewares/    # Auth, file uploads, etc.
├── models/         # Mongoose schemas & aggregation
├── routes/         # Express route definitions
├── utils/          # API helpers (ApiError, ApiResponse, Cloudinary)
└── app.js/index.js # Entry points
```

---

## Tech Stack

- **Runtime:** Node.js (ESM)
- **Framework:** Express v5
- **Database:** MongoDB + Mongoose
- **Auth:** JWT (access + refresh tokens) + bcrypt
- **File uploads:** Multer → Cloudinary
- **Pagination:** mongoose-aggregate-paginate-v2

---

## Features

### 👤 User Management
- **Secure Authentication**: Implementation of Access and Refresh Token rotation for secure, persistent sessions.
- **Profile Management**: Customizable user profiles with avatar and cover image uploads via Cloudinary.
- **Watch History**: Automatic tracking of user viewing history for a personalized experience.
- **Account Security**: Secure password hashing with `bcrypt` and structured password update flows.

### 📹 Video Handling
- **Cloudinary Integration**: Robust file upload pipeline for high-quality video and thumbnail storage.
- **Video Operations**: Full CRUD (Create, Read, Update, Delete) for video content.
- **Visibility Control**: Ability to toggle "Published" status to manage video availability.
- **Analytics**: Real-time tracking of video views and creator-specific metrics.

### 💬 Social & Interaction
- **Advanced Commenting**: Full system for adding, editing, and deleting comments on any video.
- **Flexible Liking**: Unified "Like" system for videos, comments, and tweets.
- **Tweet System**: Short-form text updates for creators to engage with their audience.
- **Subscription Model**: Real-time channel subscription and subscriber tracking system.

### 📂 Playlists & Collections
- **Dynamic Playlists**: Users can create, update, and delete custom playlists.
- **Collection Management**: Easily add or remove videos from existing playlists.

### 📊 Creator Dashboard
- **Channel Analytics**: Comprehensive view of total video performance, subscriber counts, and like counts.
- **Video Management**: Dedicated view for creators to manage their entire video catalog.

### 🔍 Search & Performance
- **Aggregation Pipelines**: High-performance data retrieval using MongoDB aggregation (lookups, grouping, projects).
- **Pagination**: Optimized data fetching with `mongoose-aggregate-paginate-v2` for a smooth UI experience.
- **API Documentation**: Fully documented interactive API using **Swagger UI**.

---

## API

Base URL: `/api/v1`

| Router                                                                                    | Status             |
| ----------------------------------------------------------------------------------------- | ------------------ |
| `/users`, `/videos`, `/comments`, `/likes`, `/subscriptions`, `/tweets`, `/playlists`, `/dashboard` | Fully implemented  |


## Setup

```bash
# Install dependencies
npm install

# Create .env with:
# PORT, MONGODB_URI, CORS_ORIGIN
# ACCESS_TOKEN_SECRET, ACCESS_TOKEN_EXPIRY
# REFRESH_TOKEN_SECRET, REFRESH_TOKEN_EXPIRY
# CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET

npm run dev
```

---

Created by :- **Abhishek Kumar**
