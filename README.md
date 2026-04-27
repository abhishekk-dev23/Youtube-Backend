# VideoTube — Backend

A production-grade REST API backend for a video-sharing platform, built with Node.js, Express, and MongoDB.

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

- User registration/login with avatar & cover image upload
- JWT dual-token auth with cookie support
- Channel profiles with subscriber counts (aggregation pipeline)
- Watch history
- Models for videos, comments, likes, subscriptions, playlists, tweets

---

## API

Base URL: `/api/v1`

| Router                                                                                    | Status             |
| ----------------------------------------------------------------------------------------- | ------------------ |
| `/users`                                                                                  | Fully implemented  |
| `/videos`, `/comments`, `/likes`, `/subscriptions`, `/tweets`, `/playlists`, `/dashboard` | Scaffolded (stubs) |


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

Made by **Abhishek Kumar**
