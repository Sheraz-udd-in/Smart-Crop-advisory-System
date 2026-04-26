# Smart Crop Advisory System

A full-stack agricultural advisory platform with farmer-facing tools and an admin backend.

## Repository Overview

This repository contains multiple app folders:

- `smart-yield-app/server` - Node.js + Express + MongoDB backend API
- `smart-yield-app/smart-yield-app` - Main React + TypeScript frontend (primary app)
- `client` - Secondary React + Vite frontend scaffold

## Features

- Farmer authentication (signup/login)
- Crop recommendations
- Fertilizer guidance
- Weather insights
- Ask-an-expert query flow
- Admin query management
- REST API with JWT auth and role-based access

## Tech Stack

### Backend
- Node.js
- Express
- MongoDB + Mongoose
- JWT + bcrypt

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

## Prerequisites

- Node.js 20+
- npm
- MongoDB Atlas (recommended) or local MongoDB

## Quick Start

### 1) Clone and enter project

```bash
git clone https://github.com/Sheraz-udd-in/Smart-Crop-advisory-System.git
cd Smart-Crop-advisory-System
```

### 2) Install backend dependencies

```bash
cd smart-yield-app/server
npm install
```

### 3) Configure backend environment

Create/update `smart-yield-app/server/.env`:

```env
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_long_random_secret
NODE_ENV=development
CORS_ORIGIN=http://localhost:8080
```

### 4) Seed database

```bash
npm run seed
```

### 5) Start backend

```bash
npm run dev
```

Backend runs at: `http://localhost:5000`

### 6) Install and run primary frontend

Open another terminal:

```bash
cd smart-yield-app/smart-yield-app
npm install
npm run dev
```

Frontend runs at: `http://localhost:8080`

## API Base URL

- Local API: `http://localhost:5000/api`

## Important Notes

- Do not commit secrets. `.env` is gitignored.
- If Atlas password contains special characters (e.g. `@`, `#`), URL-encode them in `MONGODB_URI`.
- Ensure Atlas Network Access allows your current IP.

## Useful Commands

### Backend

```bash
cd smart-yield-app/server
npm run dev
npm run seed
npm start
```

### Main Frontend

```bash
cd smart-yield-app/smart-yield-app
npm run dev
npm run build
npm run lint
```

### Secondary Client

```bash
cd client
npm run dev
npm run build
```

## Project Structure

```text
Capstone-master/
  client/
  smart-yield-app/
    server/
    smart-yield-app/
```

## License

This project is for educational and capstone use.
