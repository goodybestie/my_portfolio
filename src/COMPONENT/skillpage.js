import React from 'react';
import {  Box, Typography, Card, CardContent, CardMedia, Button, Chip, Grid,Container} from '@mui/material';
import { Visibility, Code, GitHub, Launch } from '@mui/icons-material';
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
      title: 'E-Commerce Platform',
      description: 'A modern, full-stack e-commerce solution with real-time inventory management, secure payments, and admin dashboard.',
      image: '/exquisite.png',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
      liveDemo: '#',
      code: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics.',
      image: '/portfolio.png',
      tags: ['Next.js', 'Prisma', 'tRPC', 'Tailwind CSS'],
      liveDemo: '#',
      code: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.',
      image: '/api/placeholder/300/200',
      tags: ['React', 'Chart.js', 'Weather API', 'PWA'],
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
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      bgcolor: 'rgba(0,0,0,0.6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      '&:hover': {
                        opacity: 1
                      }
                    }}
                  >
                    {project.liveDemo && (
                      <Button
                        variant="contained"
                        startIcon={<Visibility />}
                        sx={{
                          bgcolor: '#2196f3',
                          '&:hover': {
                            bgcolor: '#1976d2'
                          }
                        }}
                      >
                        Live Demo
                      </Button>
                    )}
                    {project.code && (
                      <Button
                        variant="contained"
                        startIcon={<Code />}
                        sx={{
                          bgcolor: '#424242',
                          '&:hover': {
                            bgcolor: '#212121'
                          }
                        }}
                      >
                        Code
                      </Button>
                    )}
                    {project.external && (
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Launch sx={{ color: 'white', fontSize: 24, cursor: 'pointer' }} />
                        {project.link && (
                          <GitHub sx={{ color: 'white', fontSize: 24, cursor: 'pointer' }} />
                        )}
                      </Box>
                    )}
                  </Box>
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
                        sx={{
                          bgcolor: '#2196f3',
                          textTransform: 'none',
                          '&:hover': {
                            bgcolor: '#1976d2'
                          }
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