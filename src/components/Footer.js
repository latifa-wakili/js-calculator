import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', padding: '20px' }}>
      <Typography variant="body1" align="center">
        © 2025 My Portfolio. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;