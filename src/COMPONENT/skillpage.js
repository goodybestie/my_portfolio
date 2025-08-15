import React from 'react';
import {  Box, Typography, Card, CardContent, CardMedia, Button, Chip, Grid,Container} from '@mui/material';
import { Visibility, Code, GitHub,  } from '@mui/icons-material';
import Aos from 'aos';
import {useEffect} from 'react'

import 'aos/dist/aos.css';

const FeaturedProjects = React.forwardRef((props, ref) => {
useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Cake Business Site',
      description: 'A user get to order any cake of his/her choice, can also send an email.',
      image: '/exquisite.png',
      tags: ['React', 'TypeScript'],
      liveDemo: 'https://cakebusiness-site.vercel.app/',
      code: '#'
    },
    {
      id: 2,
      title: 'Photographer Portfolio',
      description: 'A simple landing Page of a Photographer portfolio',
      image: '/portfolio.png',
      tags: ['Next.js', "TypeScript", 'Tailwind CSS'],
      liveDemo: 'https://photographer-portfolio-gamma.vercel.app/',
      code: '#'
    },
    {
      id: 3,
      title: 'learning management system',
      description: 'A simple lms that allows users to learn and track their progress.',
      image: '/learning.png',
      tags: ["TypeScript", 'Next.js', 'Tailwind CSS'],
      external: true,
      link: true
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Comprehensive analytics dashboard for social media metrics with AI-powered insights and recommendations.',
      image: '/api/placeholder/300/200',
      tags: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
      external: true,
      link: true
    }
  ];

  return (
    <Box ref={ref} sx={{ minHeight: '100vh', bgcolor: '#f5f5f5', py: 8 }}>
      <Container maxWidth="lg" data-aos="fade-up" data-aos-delay="100">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              fontWeight: 'bold', 
              color: '#1a1a1a', 
              mb: 2 
            }}
          >
            Featured Projects
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#666', 
              maxWidth: '600px', 
              mx: 'auto',
              fontWeight: 400
            }}
          >
            A collection of my recent work showcasing various technologies and problem-solving approaches
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }} data-aos="fade-up" data-aos-delay="100">
          {projects.map((project) => (
            <Grid item xs={12} md={6} key={project.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    transform: 'translateY(-4px)'
                  }
                }}
              >
                {/* Project Image with Overlay */}
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  
                </Box>

                {/* Project Content */}
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    sx={{ 
                      fontWeight: 600, 
                      color: '#1a1a1a', 
                      mb: 2 
                    }}
                  >
                    {project.title}
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#666', 
                      mb: 3, 
                      lineHeight: 1.6 
                    }}
                  >
                    {project.description}
                  </Typography>

                  {/* Technology Tags */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {project.tags.map((tag, index) => (
                      <Chip
                        key={index}
                        label={tag}
                        size="small"
                        sx={{
                          bgcolor: '#f0f0f0',
                          color: '#555',
                          fontWeight: 500,
                          '&:hover': {
                            bgcolor: '#e0e0e0'
                          }
                        }}
                      />
                    ))}
                  </Box>

                  {/* Action Buttons */}
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    {project.liveDemo && (
  <Button
    variant="contained"
    startIcon={<Visibility />}
    href={project.liveDemo}   // 👈 link goes here
    target="_blank"           // 👈 opens in new tab
    rel="noopener noreferrer" // 👈 security best practice
    sx={{
      bgcolor: '#2196f3',
      textTransform: 'none',
      '&:hover': { bgcolor: '#1976d2' }
    }}
  >
    Live Demo
  </Button>
)}

                    {project.code && (
                      <Button
                        variant="outlined"
                        startIcon={<Code />}
                        sx={{
                          color: '#555',
                          borderColor: '#ddd',
                          textTransform: 'none',
                          '&:hover': {
                            borderColor: '#bbb',
                            bgcolor: '#f9f9f9'
                          }
                        }}
                      >
                        Code
                      </Button>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* View All Projects Button */}
        <Box sx={{ textAlign: 'center' }}>
          <a href="https://github.com/dashboard">
          <Button
            variant="contained"
            size="large"
            startIcon={<GitHub />}
            sx={{
              bgcolor: '#1a1a1a',
              color: 'white',
              px: 4,
              py: 1.5,
              textTransform: 'none',
              fontSize: '1.1rem',
              '&:hover': {
                bgcolor: '#333'
              }
            }}
          >
            View All Projects on GitHub
          </Button>
          </a>
        </Box>
      </Container>
    </Box>
  );
});

export default FeaturedProjects;