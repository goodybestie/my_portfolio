import React from 'react';
import { Typography, Box } from "@mui/material";
import { FaArrowUp } from "react-icons/fa6";
import { forwardRef } from 'react';

const CopyRight = forwardRef(({ homePageRef }, ref) => {

  const handleArrowClick = () => {
    console.log(homePageRef)
    if (homePageRef && homePageRef.current) {
      homePageRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Ref is not properly set.');
    }
};

  return (
    <Box sx={{}}>
      <Box sx={{
        display: "flex",
        justifyContent: "space-around",
        padding: "10px",
        ml: { md: "20rem", xs: "1rem" },
      }}>
        <Box sx={{ color: "#ffffff", mt: "1rem" }}>
          <Typography>GoodyCode @2023, All Rights Reserved</Typography>
        </Box>
        <Box sx={{ fontSize: "2rem", cursor: "pointer" }} onClick={() => handleArrowClick()}>

          <FaArrowUp style={{
            border: "2px solid #EEE2DE",
            borderRadius: "50%",
            padding: "0.2rem",
          }} />
        </Box>
      </Box>
    </Box>
  );
})
export default CopyRight
