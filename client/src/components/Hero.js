import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function Hero() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)',
        color: 'white',
        py: { xs: 6, md: 10 },
        mb: 4,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" fontWeight={700} gutterBottom>
          Welcome to News App
        </Typography>
        <Typography variant="h5" component="p" fontWeight={400}>
          Stay updated with the latest news from around the world. Browse, search, and read trending stories in one place.
        </Typography>
      </Container>
    </Box>
  );
}

export default Hero; 