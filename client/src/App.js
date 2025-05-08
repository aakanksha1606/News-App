import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NewsDetail from './components/NewsDetail';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer';
import Hero from './components/Hero';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
    <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Home />
              </>
            } />
            <Route path="/article/:id" element={<NewsDetail />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
          <Footer />
    </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
