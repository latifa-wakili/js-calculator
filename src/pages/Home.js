import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="h4" color="textSecondary" paragraph>
        <Typewriter
          options={{
            strings: ['Web Developer', 'React Expert', 'UI/UX Designer'],
            autoStart: true,
            loop: true,
          }}
        />
      </Typography>
      <Button variant="contained" color="primary" href="/portfolio">
        Check My Work
      </Button>
    </Container>
  );
};

export default Home;