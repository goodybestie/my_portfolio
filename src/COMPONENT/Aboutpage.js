import React, { useEffect, forwardRef } from 'react';
import { Box, Typography, Card, CardContent, Chip, Grid } from "@mui/material";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaCode,  FaRocket, FaUsers } from 'react-icons/fa';

const skills = [
  "React", "TypeScript", "Next.js",  "Git",
  "Tailwind CSS", "vite", "MUI", 'MANTINE', "REST APIs", "Testing"
];

const AboutPage = forwardRef((props, ref) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: { xs: 4, md: 6 }, bgcolor: 'background.default' }} ref={ref}>
      {/* Header */}
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}
      >
        About Me
      </Typography>

      <Typography
        variant="h6"
        textAlign="center"
        sx={{
          color: '#6b7280',
          maxWidth: 700,
          mx: 'auto',
          mt: 1,
          mb: { xs: 4, md: 6 },
          fontSize: { xs: '1rem', md: '1.1rem' }
        }}
      >
        Passionate developer with 3+ years of experience building modern web applications
      </Typography>

      {/* Content */}
      <Grid container spacing={3}>
        {/* LEFT COLUMN: two stacked cards */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'grid', gap: 3 }}>
            {/* My Journey card */}
            <Card sx={{ borderRadius: 3, boxShadow: 3 }} data-aos="fade-up">
              <CardContent>
                <Typography variant="h6" fontWeight="bold">My Journey</Typography>
                <Typography color="text.secondary" mt={2}>
                  I'm a passionate frontend web developer who loves creating digital solutions that make a difference.
                  My journey began with curiosity about how websites work, and it has evolved into a deep expertise
                  in modern web technologies.
                </Typography>
                <Typography color="text.secondary" mt={2}>
                  I specialize in React, TypeScript, and Next.js, with a strong focus on creating scalable
                  applications that provide exceptional user experiences.
                </Typography>
              </CardContent>
            </Card>

            {/* Technical Skills card */}
            <Card sx={{ borderRadius: 3, boxShadow: 3 }} data-aos="fade-up" data-aos-delay="100">
              <CardContent>
                <Typography variant="h6" fontWeight="bold" mb={2}>
                  Technical Skills
                </Typography>

                {/* Grid of chips */}
                <Grid container spacing={1}>
                  {skills.map((skill) => (
                    <Grid item xs={6} sm={4} md={3} key={skill}>
                      <Chip label={skill} variant="outlined" size="small" sx={{ width: '100%' }} />
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        {/* RIGHT COLUMN: four feature cards */}
        <Grid item xs={12} md={6} container spacing={3}>
          {[
            { icon: <FaCode size={24} />, title: "Clean Code", desc: "Writing maintainable, scalable, and efficient code that follows best practices", delay: 100 },
            { icon: <FaRocket size={24} />, title: "Performance", desc: "Optimizing applications for speed, accessibility, and cross-platform compatibility", delay: 300 },
            { icon: <FaUsers size={24} />, title: "Collaboration", desc: "Working effectively in teams and communicating technical concepts clearly", delay: 400 }
          ].map((item, i) => (
            <Grid item xs={12} key={i}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }} data-aos="fade-up" data-aos-delay={item.delay}>
                <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  {item.icon}
                  <Box>
                    <Typography fontWeight="bold">{item.title}</Typography>
                    <Typography color="text.secondary">{item.desc}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
  );

export default AboutPage;
