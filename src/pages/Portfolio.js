import React from 'react';
import { Container, Grid } from '@mui/material';
import PortfolioItem from '../components/PortfolioItem';

const projects = [
  { title: 'Project 1', description: 'Description of project 1', image: 'path_to_image1.jpg', link: 'https://link_to_project1' },
  { title: 'Project 2', description: 'Description of project 2', image: 'path_to_image2.jpg', link: 'https://link_to_project2' },
  { title: 'Project 3', description: 'Description of project 3', image: 'path_to_image3.jpg', link: 'https://link_to_project3' },
];

const Portfolio = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PortfolioItem {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;