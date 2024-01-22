import { Box, Typography } from "@mui/material"
// import typescripticon from "../COMPONENT/IMAGE/typescripticon.png"
// import javascripticon from "../COMPONENT/IMAGE/javascripticon.png"
// import nexticon from "../COMPONENT/IMAGE/nexticon.webp"
// import reacticon from "../COMPONENT/IMAGE/reacticon.png"
import React, { forwardRef } from "react"
import { MdOutlineStarOutline } from "react-icons/md";

const SkillPage = forwardRef((props, ref) => {

    // const icon = [{react:reacticon, next:nexticon, java:javascripticon, typescript:typescripticon}]

    return(
        <Box ref={ref}>
            <Box >
                <Typography variant="h4" sx={{textAlign:"center",color:"#FFA732", mb:"10px"}}>Skills</Typography>
                <Typography sx={{textAlign:"center", color:"#EEE2DE"}}>The Skills tool technology i'm really good at....</Typography>
            </Box>
            <Box sx={{color:"#fff", textAlign:"center", mt:"2rem" }}>
                <Box >

            <Typography> <MdOutlineStarOutline color="#FFA732"/>Front-End Development</Typography>
            <Typography sx={{mb:"2rem"}}>(React js, Typscript and Next js)</Typography>
            </Box>
            <Box >
           <Typography><MdOutlineStarOutline color="#FFA732"/> web designer</Typography>
           <Typography sx={{mb:"2rem"}}> (HTML CSS and BOOTSTRAP 5)</Typography>
           </Box>
           <Box >
           <Typography><MdOutlineStarOutline color="#FFA732"/>logo designer, and graphics designer</Typography>
           <Typography>(CorelDraw, Adobe Illustrator, Adobe Photoshop)</Typography>
           </Box>
                {/* {
                    icon.map((icon) => (
                        <Box key={icon} sx={{display:"flex", justifyContent:"center", mt:"30px", gap:"15px", mb:"30px"  }}>
                            <img src={icon.java} alt="java" style={{width:"7%"}}/>
                            <img src={icon.react} alt="react" style={{width:"7%"}} />
                            <img src={icon.next} alt="next" style={{width:"7%"}}/>
                            <img src={icon.typescript} alt="typescript" style={{width:"7%"}}/>
                        </Box>
                    ))
                } */}
            </Box>
        </Box>
    )
})
export default SkillPage
