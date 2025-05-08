import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
  Chip,
  Divider,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function NewsDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { article } = location.state || {};

  if (!article) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h5" color="error">
          Article not found
        </Typography>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
          sx={{ mt: 2 }}
        >
          Back to Home
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/')}
        sx={{ mb: 2 }}
      >
        Back to Home
      </Button>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {article.title}
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Chip
            label={article.source.name}
            color="primary"
            sx={{ mr: 1 }}
          />
          <Typography
            variant="caption"
            color="text.secondary"
            component="span"
          >
            {new Date(article.publishedAt).toLocaleString()}
          </Typography>
        </Box>
        {article.urlToImage && (
          <Box
            component="img"
            src={article.urlToImage}
            alt={article.title}
            sx={{
              width: '100%',
              maxHeight: '400px',
              objectFit: 'cover',
              mb: 3,
            }}
          />
        )}
        <Typography variant="h6" gutterBottom>
          {article.description}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1" paragraph>
          {article.content}
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
            color="primary"
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Full Article
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default NewsDetail; 