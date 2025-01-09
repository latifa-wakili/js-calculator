import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Home, Info, Work, ContactMail } from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Button component={Link} to="/" color="inherit" startIcon={<Home />}>Home</Button>
        <Button component={Link} to="/about" color="inherit" startIcon={<Info />}>About</Button>
        <Button component={Link} to="/portfolio" color="inherit" startIcon={<Work />}>Portfolio</Button>
        <Button component={Link} to="/contact" color="inherit" startIcon={<ContactMail />}>Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;