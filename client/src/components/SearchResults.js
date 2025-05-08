import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  CircularProgress,
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import axios from 'axios';

function SearchResults() {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const query = searchParams.get('q');

  useEffect(() => {
    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  const fetchSearchResults = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/search?q=${query}`);
      setResults(response.data.articles);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch search results');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Search Results for: {query}
      </Typography>
      <Grid container spacing={4}>
        {results.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
              }}
              onClick={() => navigate(`/article/${index}`, { state: { article } })}
            >
              <CardMedia
                component="img"
                height="200"
                image={article.urlToImage || 'https://via.placeholder.com/400x200'}
                alt={article.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h2">
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.description?.substring(0, 150)}...
                </Typography>
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Chip
                    icon={<LanguageIcon />}
                    label={article.source.name}
                    size="small"
                    color="primary"
                  />
                  <Typography variant="caption" color="text.secondary">
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default SearchResults; 