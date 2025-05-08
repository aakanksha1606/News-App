# News Application

A full-stack news application built with React and Express.js that allows users to browse and search for news articles.

## Features

- Browse latest news articles
- Search for specific news articles
- View detailed article information
- Responsive design for all devices
- Modern UI with Material-UI components

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- News API key from [NewsAPI](https://newsapi.org/)

## Setup

1. Clone the repository
2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```

4. Create a `.env` file in the root directory and add your News API key:
   ```
   PORT=5000
   NEWS_API_KEY=your_api_key_here
   ```

## Running the Application

1. Start the backend server:
   ```bash
   npm run server
   ```

2. In a new terminal, start the frontend development server:
   ```bash
   npm run client
   ```

3. Or run both servers concurrently:
   ```bash
   npm run dev
   ```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Technologies Used

- Frontend:
  - React
  - React Router
  - Material-UI
  - Axios

- Backend:
  - Express.js
  - Axios
  - CORS
  - Morgan

## API Endpoints

- `GET /api/news` - Get latest news articles
- `GET /api/search?q=query` - Search for news articles

## License

MIT 