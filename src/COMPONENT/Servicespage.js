import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Aos from 'aos';
import 'aos/dist/aos.css';

import code from "./IMAGE/code.jpg";
import phone from "./IMAGE/phone.jpg";
import ui from "./IMAGE/ui.jpg";
import graphics from "./IMAGE/graphics.jpg";
import logo from "./IMAGE/logo.jpg";
import webdesign from "./IMAGE/webdesign.jpg";
import { forwardRef } from 'react';


// ... add more images as needed

const cardData = [
  {
    id:"https://goodyblog.netlify.app/",
    title: 'Web Development',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    image: code,
  },
  {
    id:"https://www.freepik.com/search?format=search&last_filter=type&last_value=photo&query=app%20design&type=photo",
    title: 'Phone App',
    description: 'Another description for the second card.',
    image: phone,
  },
  {
    title: 'UI/UX',
    description: 'Yet another description for the third card.',
    image: ui,
  },
  {
    title: 'Gaphics Design',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    image: graphics,
  },
  {
    title: 'Logo Design',
    description: 'Another description for the second card.',
    image: logo,
  },
  {
    title: 'Web Design',
    description: 'Yet another description for the third card.',
    image: webdesign,
  }
];

const ServicesPage = forwardRef((props, ref) => {
  useEffect(() => {
    Aos.init({ duration: 3000, offset: 100, easing: 'ease-in-out' });
  }, []);

  return (
    <Box ref={ref}>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          width: { md: '35rem', xs: '20rem' },
          ml: { md: '25rem', xs: '0rem' },
          mb: '1rem',
        }}
      >
        <span style={{ color: '#fff' }}>My</span> {''}
        <span style={{ color: '#FFA732' }}>Special Service</span> {''}
        <span style={{ color: '#fff' }}>For your Business Development</span>
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { md: '1fr 1fr 1fr', xs: '1fr' },
          padding: { md: '50px 60px', xs: '40px 30px' },
          gap: '2rem',
          ml: { md: "5rem", xs: "0rem" },
          width: {xs:'100%', md:"90%"},
        }}
      >
        {cardData.map((card, index) => (
           <a key={card.id} href={`${card.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            data-aos-anchor-placement="center-bottom"
            sx={{
              maxWidth: 345,
              borderRadius: '14px',
              transition: 'background-color ',
              '&:hover': {
                backgroundColor: 'rgba(255, 167, 50, 0.2)',
                transition:"ease-in-out ",
              },
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={card.image}
                alt={card.title}
              />
              <CardContent>
                <Typography sx={{ color: '#FFA732' }} gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </a>
        ))}
      </Box>
    </Box>
  );
});

export default ServicesPage;
