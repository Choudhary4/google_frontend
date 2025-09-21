# Frontend - Google Login Clone

A React + Vite frontend that replicates Google's sign-in interface.

## Features
- Google-style dark theme UI
- Responsive design for all screen sizes
- Password authentication with backend integration
- Redirects to Google My Account on successful login

## Tech Stack
- React 19
- Vite for build tooling
- Axios for API requests
- CSS Grid and Flexbox for responsive layout

## Environment Variables
For local development, you can create a `.env` file:
```
VITE_API_URL=https://google-backend-blond.vercel.app
```

## Local Development.
```bash
npm install
npm run dev
```

## Build for Production
```bash
npm run build
```

## Deploy to Vercel
1. Push this frontend folder to a GitHub repository
2. Import the project in Vercel
3. Set the root directory to `frontend` if needed
4. Deploy

The app will automatically connect to the backend at `https://google-backend-blond.vercel.app`

## File Structure
- `src/components/GoogleLogin.jsx` - Main login component
- `src/components/GoogleLogin.css` - Responsive styles
- `vercel.json` - Vercel deployment configuration
- `vite.config.js` - Vite build configuration

## Notes
- Uses CSS Grid for responsive two-column to single-column layout
- Responsive breakpoints: 1024px, 768px, 480px, 320px
- Custom checkbox styling with black background and white border
- Password stored as plain text in backend (demo purposes only)
