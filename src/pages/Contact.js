import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import emailjs from 'emailjs-com';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_id', 'template_id', e.target, 'user_id')
      .then((result) => {
        alert('Message sent!');
      }, (error) => {
        alert('Message failed. Please try again.');
      });
  };
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Contact Me
      </Typography>
      <form onSubmit={sendEmail}>
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
        />
        <TextField
          label="Your Email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          name="message"
        />
                <Button variant="contained" color="primary" type="submit" sx={{ marginTop: '20px' }}>
          Send Message
        </Button>
      </form>
    </Container>
  );
};

export default Contact;