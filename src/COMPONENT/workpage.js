import { Box, Typography } from "@mui/material"
import blogapp from "./IMAGE/blogapp.png"
import todopic from "./IMAGE/todopic.png"
import cloudbudget from "./IMAGE/cloudbudget.png"
import React, { forwardRef } from "react"

const WorkPage = forwardRef((props, ref) => {
    const blogpic = blogapp
    const todo = todopic
    const cloud = cloudbudget
    return(
        <Box ref={ref} sx={{ mt:"50px"}}>
            <Box>
            <Typography variant="h4" sx={{textAlign:"center",color:"#FFA732", mb:"10px"}}>Work</Typography>
                <Typography sx={{textAlign:"center", color:"#EEE2DE"}}>Some of the networthy project i have build:</Typography>
            </Box>
            <Box sx={{mt:"30px",
             display:"flex",
              justifyContent:"center",
                flexDirection:{md:"row", xs:"column-reverse"}, 
                gap:{md:"0px", xs:"10px"},
                padding:"40px",
                 }}>
                <Box sx={{color:"#fff", mb:"10px", textAlign:"center",
                '&:hover':{
                    backgroundColor:'red',
                },
            }} className="work">
                <img src={blogpic} alt="blog" style={{ borderRadius:"10px", width:"90%"}}/>
                <Typography  variant="h6">Web Development</Typography>
                </Box>
                <Box sx={{color:"#fff", mb:"10px", textAlign:"center"  }}>
                <img src={todo} alt="blog" style={{ borderRadius:"10px",width:"90%"}}/>
                <Typography  variant="h6">Web Development</Typography>

                </Box>
                <Box sx={{color:"#fff", mb:"10px", textAlign:"center"  }}>
                <img src={cloud} alt="blog" style={{ borderRadius:"10px",width:"90%"}}/>
                <Typography  variant="h6">Web Design</Typography>

                </Box>
            </Box>
        </Box>
    )
})

export default WorkPage