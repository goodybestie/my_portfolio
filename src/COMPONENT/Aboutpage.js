import { Box, Typography} from "@mui/material";
import aboutpic from "./IMAGE/aboutpic.png"
import { FaCheck } from "react-icons/fa";
import React, { forwardRef } from 'react';



const AboutPage = forwardRef((props, ref) => {
    const AboutProfile = aboutpic
    return(
        <Box ref={ref}>
            <Typography variant="h4" sx={{textAlign:"center", color:"#FFA732", mt:"30px", mb:"30px"}}>About Me</Typography>
            <Box 
           sx={{
            display: "flex",
            padding: { xs: "20px", md: "30px" },
            flexDirection: { md: "row", xs: "column" },
            justifyContent: "space-between",
            mb:'30px',
            // gap:"20px",
            /* Larger screens styles */
            '.about-image': {
              width: '30%',
              marginBottom: '20px',
            },
            /* Smaller screens styles */
            '@media screen and (max-width: 600px)': {
              flexDirection: 'column',
              '.about-image': {
                width: '60%',
                marginLeft:"50px"
              },
            },
          }}
        >
                     <img src={AboutProfile} alt="profile" className="about-image"/>
                     <Box sx={{color: '#EEE2DE', width:{md:"65%", xs:"100%"}, mb:"30px",}}>
                      <Typography sx={{ mb:"30px",}}>Curious about me? Here you have it:</Typography>
                <Typography sx={{ mb:"30px", fontSize:"15px"}} >
                  i'm a passionate, self-proclaimed designer, 
                  i am very ethusiastic about bringing the technical and visual aspects of digital products to life, 
                  user experience, perfect design, and writing clear, readable, highly performance code matters to me.
                  </Typography>
                     <Typography sx={{ mb:"30px", fontSize:"15px"}}>i began my journey as a web developer in 2021, and since then, i've continued to grow and evolve as a developer,
                      taking on new chanllenges and learning latest technologies along the way. Now, in my twenties, 3 years after starting my web development journey,
                      i'm building cutting-edge web applications using modern technologies such as Next js Typescript and much more.  </Typography>
                      <Typography sx={{ mb:"30px", fontSize:"15px"}}>i am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
                      </Typography>
                    <Box sx={{display:"grid", gridTemplateColumns:{md:"1fr 1fr 1fr", xs:"1fr "}, gap:"1rem"}}>
                      <Box sx={{ display:"flex", gap:"1rem"}}>
                      <FaCheck color="#FFA732"/>
                      <Typography >Front-end Developer</Typography>
                      </Box>
                      <Box sx={{ display:"flex", gap:"1rem"}}>
                      <FaCheck color="#FFA732"/>
                      <Typography >Graphic Design</Typography>
                      </Box>
                      <Box sx={{ display:"flex", gap:"1rem"}}>
                      <FaCheck color="#FFA732"/>
                      <Typography >Web Design</Typography>
                      </Box>
                      <Box sx={{ display:"flex", gap:"1rem"}}>
                      <FaCheck color="#FFA732"/>
                      <Typography >Logo Design</Typography>
                      </Box>
                      <Box sx={{ display:"flex", gap:"1rem"}}>
                      <FaCheck color="#FFA732"/>
                      <Typography >Content Writter</Typography>
                      </Box>
                      <Box sx={{ display:"flex", gap:"1rem"}}>
                      <FaCheck color="#FFA732"/>
                      <Typography >Web Content Writter</Typography>
                      </Box>
                     </Box>
                      
            </Box>
            </Box>
            
        </Box>
    )
})
export default AboutPage