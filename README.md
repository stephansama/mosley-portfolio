# DJ Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/04b55465-6bc0-4f1b-a97b-1112ed63ac45/deploy-status)](https://app.netlify.com/projects/eclectic-faun-f904bb/deploys)

This is a portfolio website for DJ Mosley, built with React and TypeScript.

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Components

The portfolio is built with a variety of React components, including:

- `About`: A component to display information about the DJ.
- `Contact`: A component with a form to contact the DJ.
- `Fallback`: A fallback component for when a route is not found.
- `Footer`: The footer of the website.
- `Hero`: The hero section of the website.
- `Mixes`: A component to display the DJ's mixes.
- `Music`: A component to display the DJ's music.
- `Navigation`: The navigation bar of the website.
- `Shows`: A component to display the DJ's upcoming shows.

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.
