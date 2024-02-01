import { Box, Typography, Button } from "@mui/material";
import { FaHandsClapping } from "react-icons/fa6";
import goodypic from "./IMAGE/goodypic.png"
import { VscLocation } from "react-icons/vsc";
import { VscLayersActive } from "react-icons/vsc";
import { FaChevronRight } from "react-icons/fa";
import { forwardRef, useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'
const Homepage = forwardRef(({ contactPageRef}, ref) =>  {
    useEffect(() => {
        Aos.init({ duration: 3000, offset: 100, easing: 'ease-in-out' });
      }, []);
      
    console.log("Homepage ref:", ref);
    const profile = goodypic

    const handleHireMe = () => {
        if (contactPageRef && contactPageRef.current) {
            contactPageRef.current.scrollIntoView({ behavior: 'smooth' });
          } else {
            console.log('Ref is not properly set.');
          }
    }
    return (
        <Box ref={ref}>
            
            {/* <Box sx={{backgroundColor:"#000"}}>
            <DrawerAppBar />
            </Box> */}
            <Box sx={{backgroundColor:"#000"}}>
            <Box sx={{
                display: "flex",
                padding: { xs: "20px", md: "40px" },
                flexDirection: { md: "row", xs: "column-reverse" },

                alignItems: "center",
            }}>
                <Box>
                    <Typography
                        sx={{
                            color: "#FFA732",
                            mb: "10px",
                            fontSize: { xs: "20px", md: "30px" }
                        }}>
                        Hi i'm GoodyCode <FaHandsClapping color="orange" />
                    </Typography>
                    <Typography sx={{ color: '#008080', width: { md: "60%", xs: "100%" }, mb: "30px" }}>
                        i'm a front-end developer, A graduate of Computer Science with a degree of Higher National diploma.
                        i have passion for creating interactive websites and web application to give user maximum user-experience and comfort smoothe flow of operations while working.
                       </Typography>
                    <Typography sx={{ color: '#EEE2DE', mb: "7px" }}>
                        <VscLocation color="#EEE2DE" /> Ikot Ekpene, Akwa Ibom State.
                    </Typography>
                    <Typography sx={{ color: '#EEE2DE', mb: "33px" }}>
                        <VscLayersActive color="#EEE2DE" />  Available for new product
                    </Typography>
                    <Box style={{ display: "flex", gap: "3rem" }}>
                       <Button onClick={()=>handleHireMe()} style={{ backgroundColor: "#FFA732",
                         color: "#000",
                          padding:"12px",
                          borderRadius:"10px", width:{md:"15%", xs:"7rem"} }}> Hire me 
                         <FaChevronRight style={{ marginLeft: "8px" }} /> 
                         </Button>
                         <Box sx={{mt:"13px", display:"flex", gap:"7px"}}>
                     <a href="https://drive.google.com/file/d/1WLJkhdpbMLK8BTrhu4C5MYqR9XAmCvt9/view?usp=sharing" style={{textDecoration:"none"}}>  
                      <Typography sx={{ color: "#EEE2DE",  cursor:"pointer",   }}> View Resume 
                          </Typography></a>
                          <FaChevronRight  style={{  color:"#FFA732", marginTop:"4px" }}/>
                         </Box>
                    </Box>
                </Box>
                <img src={profile} alt="profile" style={{ width: "60%", marginBottom: "20px", }} data-aos="fade-up"
            data-aos-delay={100}
            data-aos-anchor-placement="center-bottom"  />

            </Box>
            {/* <Box sx={{backgroundColor:"#000"}}>
            <AboutPage />
            <SkillPage />
            <WorkPage />
            <ContactPage />
            </Box>
            <Box sx={{backgroundColor:"#FFA732"}}>
            <CopyRight />
            </Box> */}
            </Box>
        </Box>
    )
})
export default Homepage