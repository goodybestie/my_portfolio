// import { Box, Typography, LinearProgress } from "@mui/material";
// import { MdOutlineStarOutline } from "react-icons/md";
// import React from "react";

// const SkillPage = React.forwardRef((props, ref) => {
//   const skillsData = [
//     { category: 'Front-End Development', skills: ['React.js', 'Typscript', 'Next.js'] },
//     { category: 'Web Design', skills: ['HTML', 'CSS', 'Bootstrap 5'] },
//     { category: 'Graphic Design', skills: ['CorelDraw', 'Adobe Illustrator', 'Adobe Photoshop'] },
//   ];

//   return (
//     <Box ref={ref}>
//       <Box>
//         <Typography variant="h4" sx={{ textAlign: "center", color: "#FFA732", mb: "10px" }}>Skills</Typography>
//         <Typography sx={{ textAlign: "center", color: "#EEE2DE" }}>The Skills tool technology I'm really good at....</Typography>
//       </Box>

//       {skillsData.map((category, index) => (
//         <Box key={index} sx={{ color: "#fff",  mt: "2rem", ml:{md:"20rem", xs:"2rem"} }}>
//           <Box>
//             <Typography><MdOutlineStarOutline color="#FFA732"  />{category.category}</Typography>
//           </Box>

//           {category.skills.map((skill, skillIndex) => (
//             <Box key={skillIndex} sx={{ marginBottom: '1rem' }}>
//               <LinearProgress
//                 variant="determinate"
//                 value={Math.floor(Math.random() * 100)} // Replace this with the actual skill level
//                 sx={{
//                   height: '8px', // Adjusted height
//                   borderRadius: '4px', 
//                   width:{md:"53%", xs:"90%"},
//                   // Adjusted border-radius
//                   '& .MuiLinearProgress-bar': {
//                       borderRadius: '4px',
//                       background: `linear-gradient(90deg, #FFA732 50%, #EFECEC 50%)`,
                      
//                     },
//                 }}
//               />
//               <Box sx={{display: "grid",  gridTemplateColumns: "1fr 1fr"}}>
//                 <Typography variant="h6" sx={{ color: '#FFA732', marginBottom: '0.5rem' }}>
//                   {skill}
//                 </Typography>
//               <Typography sx={{ color: '#FFA732', marginTop: '0.5rem', ml:{xs:"5rem", md:"0.4rem"}}}>
//                 {Math.floor(Math.random() * 100)}% {/* Replace this with the actual skill percentage */}
//               </Typography>
//               </Box>
//             </Box>
//           ))}
//         </Box>
//       ))}
//     </Box>
//   );
// });

// export default SkillPage;


import React from "react";
import { Box, Typography, LinearProgress, Card, CardContent } from "@mui/material";
import { MdOutlineStarOutline } from "react-icons/md";
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

const SkillPage = React.forwardRef((props, ref) => {
  const skillsData = [
    { category: 'Front-End Development', skills: ['React.js', 'Typscript', 'Next.js'] },
    { category: 'Web Design', skills: ['HTML', 'CSS', 'Bootstrap 5'] },
    { category: 'Graphic Design', skills: ['CorelDraw', 'Adobe Illustrator', 'Adobe Photoshop'] },
  ];

  useEffect(() => {
    Aos.init({ duration: 2000, offset: 100, easing: 'ease-in-out' });
  }, []);

  return (
    <Box ref={ref}>
      <Box>
        <Typography variant="h4" sx={{ textAlign: "center", color: "#FFA732", mb: "10px" }}>Skills</Typography>
        <Typography sx={{ textAlign: "center", color: "#EEE2DE" }}>The Skills tool technology I'm really good at....</Typography>
      </Box>
    <Box
    data-aos="fade-up"
    data-aos-delay={ 100}
    data-aos-anchor-placement="center-bottom"
    sx={{ display: "grid", gridTemplateColumns: {xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr"  }, gap: "20px",   justifyContent: "center", padding:"5rem"  }}>
      {skillsData.map((category, index) => (
        <Card key={index} sx={{ color: "#fff", opacity:"90%", ml: { md: "", xs: "" }, width:{md:"100%", xs:"17rem"}, borderRadius:"14px"   }}>
          <CardContent>
            <Box>
              <Typography variant="h5" sx={{color:"#FFA732"}}>
                <MdOutlineStarOutline color="#FFA732" /> {category.category}
              </Typography>
            </Box>

            {category.skills.map((skill, skillIndex) => (
              <Box key={skillIndex} sx={{ }}>
                <LinearProgress
                  variant="determinate"
                  value={Math.floor(Math.random() * 100)} // Replace this with the actual skill level
                  sx={{
                    height: '8px', // Adjusted height
                    borderRadius: '4px',
                    width: { md: "95%", xs: "100%" },
                    // Adjusted border-radius
                    '& .MuiLinearProgress-bar': {
                      borderRadius: '4px',
                      background: `linear-gradient(90deg, #FFA732 50%, #EFECEC 50%)`,
                    },
                  }}
                />
                <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr",color: '#000',  }}>
                  <Typography variant="h6" >
                    {skill}
                  </Typography>
                  <Typography sx={{ ml: { xs: "5rem", md: "14rem" } }}>
                    {Math.floor(Math.random() * 100)}% {/* Replace this with the actual skill percentage */}
                  </Typography>
                </Box>
              </Box>
            ))}
          </CardContent>
        </Card>
      ))}
    </Box>
    </Box>
  );
});

export default SkillPage;
