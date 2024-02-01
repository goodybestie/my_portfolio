import { Box,   Typography, } from '@mui/material';
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import {forwardRef} from "react"
import { IoMdMail } from "react-icons/io";
import { MdOutlinePhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const ContactPage= forwardRef((props, ref) => {


  

  return (
    <Box>
      <Box ref={ref} sx={{textAlign:"center", color:"#FFA732", mt:"3rem"}}>
        <Typography variant="h4">Contact Me</Typography>
      </Box>
      <Box sx={{display:"flex", flexDirection:{md:"row", xs:"column"}, padding:{xs:"3rem", md:"none"}, justifyContent:"space-around" , mt:"10px", }}>
        <Box>
          <Typography sx={{color:"#EEE2DE"}} >Get in touch</Typography>
          <Typography variant="h5" sx={{color:"#EEE2DE"}}>Let's Talk For Your </Typography>
            <Typography sx={{color:"#FFA732", mb:"1rem"}}>Next Projects</Typography>
            
        </Box>
   <Box>
    <Box sx={{color:"#EEE2DE",display:"flex", gap:"1rem", fontSize:"20px", mb:"1rem"}}>
      <a href="mailto:goodnessbassey003@gmail.com">
        <IoMdMail  style={{ 
      border: "2px solid #FFA732", 
      borderRadius: "50%", 
      padding: "0.2rem",
      cursor:"pointer",
      fontSize:"2rem"
    }}  />
    </a>
   <Typography>send me a mail</Typography>
   </Box>
   <Box sx={{color:"#EEE2DE",display:"flex", gap:"1rem", fontSize:"20px", }}>
    
<MdOutlinePhone style={{ 
      border: "2px solid #FFA732", 
      borderRadius: "50%", 
      padding: "0.2rem",
      cursor:"pointer",
      fontSize:"2rem"
    }} />
<Typography>+232-8131302861</Typography>
   </Box>
   </Box>
</Box>
   <Box sx={{display:"flex", gap:"1rem", justifyContent:"center", fontSize:"20px",mb:"2rem" }}>
            <a href='https://twitter.com/Harmonyble77388' target="_blank" rel="noopener noreferrer">
              <BsTwitterX style={{ 
      border: "2px solid #FFA732", 
      borderRadius: "50%", 
      padding: "0.2rem",
      cursor:"pointer",
      fontSize:"2rem",
      color:"#EEE2DE",
      textDecoration:"none"
    }}/> 
    </a>
    <a href='https://www.facebook.com/profile.php?id=100078342684097'>
             <FaFacebook style={{ 
      border: "2px solid #FFA732", 
      borderRadius: "50%", 
      padding: "0.2rem",
      cursor:"pointer",
      fontSize:"2rem",
      color:"#EEE2DE"
    }}/>
    </a>
            <a href='https://www.linkedin.com/in/goodness-bassey-804254299/'>
               <FaLinkedinIn style={{ 
      border: "2px solid #FFA732", 
      borderRadius: "50%", 
      padding: "0.2rem",
      cursor:"pointer",
      fontSize:"2rem",
      color:"#EEE2DE"
    }}/>
    </a>
     <FaWhatsapp style={{ 
      border: "2px solid #FFA732", 
      borderRadius: "50%", 
      padding: "0.2rem",
      cursor:"pointer",
      fontSize:"2rem",
      color:"#EEE2DE"
    }}/>
   
                     <a href='https://github.com/dashboard'> <FaGithub style={{ 
      border: "2px solid #FFA732", 
      borderRadius: "50%", 
      padding: "0.2rem",
      cursor:"pointer",
      fontSize:"2rem",
      color:"#EEE2DE"
    }}/>
  </a>
             </Box>

    </Box>
  );
})
export default ContactPage

