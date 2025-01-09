import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const PortfolioItem = ({ title, description, image, link }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '20px' }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Button href={link} target="_blank" color="primary" sx={{ margin: '10px' }}>
        View Project
      </Button>
    </Card>
  );
};

export default PortfolioItem;