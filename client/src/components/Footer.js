import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        mt: 6,
        py: 3,
        background: '#f5f5f5',
        textAlign: 'center',
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} News App. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer; 