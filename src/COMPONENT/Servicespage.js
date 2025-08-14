import React, { useEffect, forwardRef } from 'react';
import Aos from 'aos';

import 'aos/dist/aos.css';
const ServicesPage = forwardRef((props, ref) => {
  const experienceData = [
    {
      id: 1,
      position: 'Senior Frontend Developer',
      company: 'FutureLabs',
      location: 'IkotEkpene, AkwaIbom State',
      period: '2021 - Present',
      type: 'Full-time',
      description: 'Leading frontend development initiatives for multiple high-traffic web applications, mentoring junior developers and implementing modern development practices to reduce load times by 40%.',
      achievements: [
        'Led migration from legacy codebase to modern React/TypeScript stack',
        'Improved user experience and performance for key user processes',
        'Mentored and onboarded 5 junior developers',
        'Implemented automated testing strategy that reduced bugs by 60%'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', ]
    },
    
    {
      id: 3,
      position: 'Frontend Developer',
      company: 'Digital Agency',
      location: 'Uyo, AkwaIbom State.' ,
      period: '2018 - 2020',
      type: 'Full-time',
      description: 'Created responsive web applications and landing pages for various clients. Focused on pixel-perfect implementations and cross-browser compatibility.',
      achievements: [
        'Delivered 30+ responsive websites and web applications',
        'Increased client satisfaction scores by 35% through quality delivery',
        'Implemented responsive design patterns increasing mobile traffic by 60%',
        'Optimized websites for SEO resulting in 40% traffic increases'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript']
    }
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    marginBottom: '2rem',
    padding: '2rem',
    transition: 'all 0.3s ease',
  };

  const cardHoverStyle = {
    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
    transform: 'translateY(-4px)',
  };

  const chipStyle = {
    backgroundColor: '#f0f0f0',
    color: '#555',
    padding: '0.25rem 0.75rem',
    borderRadius: '16px',
    fontSize: '0.875rem',
    fontWeight: '500',
    display: 'inline-block',
    margin: '0.25rem 0.5rem 0.25rem 0',
  };

  const typeChipStyle = {
    backgroundColor: '#e3f2fd',
    color: '#1976d2',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.875rem',
    fontWeight: '500',
  };

  return (
    <div 
      ref={ref} 
      style={{ 
        minHeight: '100vh', 
        backgroundColor: '#f8f9fa', 
        padding: '4rem 1rem' 
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }} data-aos="fade-up" data-aos-delay="100">
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            color: '#1a1a1a', 
            marginBottom: '1rem',
            margin: '0 0 1rem 0'
          }}>
            Experience
          </h1>
          <h2 style={{ 
            fontSize: '1.25rem',
            color: '#666', 
            maxWidth: '600px', 
            margin: '0 auto',
            fontWeight: '400',
            lineHeight: '1.6'
          }}>
            My professional journey and the impact I've made at each organization
          </h2>
        </div>

        {/* Experience Timeline */}
        <div>
          {experienceData.map((experience, index) => (
            <div
              key={experience.id}
              style={cardStyle}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, cardHoverStyle);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = cardStyle.boxShadow;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Header */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start', 
                marginBottom: '1.5rem',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    fontSize: '1.5rem',
                    fontWeight: '600', 
                    color: '#1a1a1a', 
                    marginBottom: '0.5rem',
                    margin: '0 0 0.5rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ color: '#2196f3' }}>
                      <path d="M12 7V3H2v18h20V7H12z" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
                    </svg>
                    {experience.position}
                  </h3>
                  <h4 style={{ 
                    fontSize: '1.25rem',
                    color: '#2196f3', 
                    fontWeight: '500',
                    marginBottom: '0.5rem',
                    margin: '0 0 0.5rem 0'
                  }}>
                    {experience.company}
                  </h4>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem',
                    flexWrap: 'wrap',
                    fontSize: '0.875rem',
                    color: '#666'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ color: '#666' }}>
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      {experience.location}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ color: '#666' }}>
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                        <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                        <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                        <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      {experience.period}
                    </div>
                  </div>
                </div>
                <span style={typeChipStyle}>
                  {experience.type}
                </span>
              </div>

              <hr style={{ 
                border: 'none', 
                borderTop: '1px solid #e0e0e0', 
                margin: '1.5rem 0' 
              }} />

              {/* Description */}
              <p style={{ 
                color: '#555', 
                marginBottom: '1.5rem',
                lineHeight: '1.7',
                fontSize: '1rem'
              }}>
                {experience.description}
              </p>

              {/* Key Achievements */}
              <h5 style={{ 
                fontSize: '1.125rem',
                fontWeight: '600', 
                color: '#1a1a1a', 
                marginBottom: '1rem',
                margin: '0 0 1rem 0'
              }}>
                Key Achievements:
              </h5>
              <ul style={{ 
                paddingLeft: '1.5rem', 
                marginBottom: '1.5rem',
                color: '#555'
              }}>
                {experience.achievements.map((achievement, achievementIndex) => (
                  <li 
                    key={achievementIndex}
                    style={{ 
                      marginBottom: '0.5rem',
                      lineHeight: '1.6'
                    }}
                  >
                    {achievement}
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <h5 style={{ 
                fontSize: '1.125rem',
                fontWeight: '600', 
                color: '#1a1a1a', 
                marginBottom: '1rem',
                margin: '0 0 1rem 0'
              }}>
                Technologies:
              </h5>
              <div>
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    style={chipStyle}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default ServicesPage;