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
          <Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column-reverse", md: "row" },
    alignItems: { xs: "center", md: "flex-start" }, // Align top in desktop
    justifyContent: "space-between",
    padding: { xs: "20px", md: "50px" },
    gap: { xs: "20px", md: "40px" },
  }}
>

  {/* Left (Text) Section */}
  <Box sx={{ flex: 1 }}>
    <Typography
      sx={{
        color: "#FFA732",
        mb: "10px",
        fontSize: { xs: "20px", md: "30px" },
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      Hi I'm GoodyCode <FaHandsClapping color="orange" />
    </Typography>

    <Typography
      sx={{
        color: "#008080",
        width: "100%",
        maxWidth: "500px",
        mb: "30px",
      }}
    >
      I'm a front-end developer, a graduate of Computer Science with a Higher
      National Diploma. I have a passion for creating interactive websites and
      web applications to give users maximum experience and smooth operation.
    </Typography>

    <Typography sx={{ color: '#EEE2DE', mb: "7px", display: "flex", alignItems: "center", gap: "8px" }}>
      <VscLocation color="#EEE2DE" /> Uyo, Akwa Ibom State.
    </Typography>

    <Typography sx={{ color: '#EEE2DE', mb: "33px", display: "flex", alignItems: "center", gap: "8px" }}>
      <VscLayersActive color="#EEE2DE" /> Available for new product
    </Typography>

    <Box sx={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
      <Button
        onClick={handleHireMe}
        sx={{
          backgroundColor: "#FFA732",
          color: "#000",
          padding: "12px",
          borderRadius: "10px",
        }}
      >
        Hire me <FaChevronRight style={{ marginLeft: "8px" }} />
      </Button>

      <Box sx={{ mt: "13px", display: "flex", gap: "7px", alignItems: "center" }}>
        <a
          href="https://drive.google.com/file/d/16a4v9XtGOrSvJ34w43wfEZgRc61PolwI/view?usp=sharing"
          style={{ textDecoration: "none" }}
        >
          <Typography sx={{ color: "#EEE2DE", cursor: "pointer" }}>
            View Resume
          </Typography>
        </a>
        <FaChevronRight style={{ color: "#FFA732" }} />
      </Box>
    </Box>
  </Box>

  {/* Right (Image) Section */}
  <Box
    sx={{
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
    data-aos="fade-up"
    data-aos-delay={100}
    data-aos-anchor-placement="center-bottom"
  >
    <img
  src={profile}
  alt="profile"
  style={{
    width: "50%",
    height: "50%",
    borderRadius: "12px", // Circle look
    objectFit: "contain",
  }}
/>

  </Box>
</Box>

        </Box>
    )
})
export default Homepage