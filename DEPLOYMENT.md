# Production Deployment Guide

## Quick Start Commands

### Development
```bash
# Terminal 1 - Backend
cd backend
npm install
npm run dev

# Terminal 2 - Frontend  
cd frontend
npm install
npm run dev
```

### Production
```bash
# Backend
cd backend
npm install
npm start

# Frontend
cd frontend
npm install
npm run build
npm run preview
```

## Environment Setup

### Backend Environment Variables
Create `backend/.env`:
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/invoice-generator
PORT=4000
CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
GEMINI_API_KEY=AIza...
```

### Frontend Environment Variables
Create `frontend/.env`:
```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
VITE_API_BASE_URL=http://localhost:4000
```

## Database Setup

1. Create MongoDB Atlas account
2. Create new cluster
3. Add database user
4. Whitelist IP addresses
5. Get connection string
6. Update `MONGO_URI` in backend/.env

## Deployment Platforms

### Backend (Render/Railway/Heroku)

1. Connect GitHub repository
2. Set environment variables
3. Build command: `npm install`
4. Start command: `npm start`
5. Port: 4000

### Frontend (Vercel/Netlify)

1. Connect GitHub repository
2. Set environment variables
3. Build command: `npm run build`
4. Output directory: `dist`
5. Update `VITE_API_BASE_URL` to production backend URL

## Post-Deployment

1. Update CORS origin in `backend/server.js` to production frontend URL
2. Test all API endpoints
3. Verify file uploads work
4. Test authentication flow
5. Monitor error logs

## Troubleshooting

### 404 Errors
- Check CORS configuration
- Verify API base URL in frontend
- Check route definitions

### 401 Errors
- Verify Clerk keys are correct
- Check token is being sent in headers
- Ensure user is signed in

### Database Errors
- Verify MongoDB connection string
- Check IP whitelist
- Ensure database user has correct permissions
