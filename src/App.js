// import './App.css';
// import { Box } from "@mui/material";
// import DrawerAppBar from "./COMPONENT/appbar" 
// import Homepage from "./COMPONENT/home"
// import AboutPage from "./COMPONENT/Aboutpage"
// import SkillPage from "./COMPONENT/skillpage"
// import WorkPage from './COMPONENT/workpage';
// import ContactPage from "./COMPONENT/contactpage"
// import CopyRight from "./COMPONENT/copyright"
// import React, { useRef } from 'react';

// function App() {
//   const myElementRef = useRef(null);

//   const scrollToElement = () => {
//     if (myElementRef.current) {
//       myElementRef.current.scrollIntoView({ behavior: 'smooth' });
//     }else{
//       console.log(null)
//     }
//   };
//   return (
//     <>
//     <Box sx={{backgroundColor:"#000"}}>
//       <Box ref={myElementRef}>
    
//             <DrawerAppBar scrollToElement={scrollToElement}/>
//       <Homepage />
//             <AboutPage id="Aboutpage"/>
//             <SkillPage  id="skillpage"/>
//             <WorkPage id="workpage" />
//             <ContactPage id="contactpage"/>
//             </Box>
//             <Box sx={{backgroundColor:"#FFA732"}}>
//             <CopyRight />
//             </Box>
//             </Box>
// </>
//   );
// }

// export default App;

// App.js
import './App.css';
import { Box } from "@mui/material";
import DrawerAppBar from "./COMPONENT/appbar" 
import Homepage from "./COMPONENT/home"
import AboutPage from "./COMPONENT/Aboutpage"
import SkillPage from "./COMPONENT/skillpage"
// import WorkPage from './COMPONENT/workpage';
import ContactPage from "./COMPONENT/contactpage"
import CopyRight from "./COMPONENT/copyright"
import React, { useRef } from 'react';
import ServicesPage from "./COMPONENT/Servicespage"

function App() {
  const aboutPageRef = useRef(null);
  const skillPageRef = useRef(null);
  const servicesPageRef = useRef(null);
  const contactPageRef = useRef(null);
  const homePageRef= useRef(null)

  const scrollToElement = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Ref is null or not defined.');
    }
  };

  return (
    <>
      <Box sx={{backgroundColor:"#000"}}>
        <DrawerAppBar
          aboutPageRef={aboutPageRef}
          skillPageRef={skillPageRef}
          servicesPageRef={servicesPageRef}
          contactPageRef={contactPageRef}
          scrollToElement={scrollToElement}
        />
        <Homepage 
        ref={homePageRef}
         contactPageRef={contactPageRef}
        />
        <AboutPage ref={aboutPageRef}/>
        <SkillPage ref={skillPageRef}/>
        {/* <WorkPage ref={workPageRef}/> */}
        <ServicesPage ref={servicesPageRef}  />
        <ContactPage ref={contactPageRef}/>
      <Box sx={{backgroundColor:"#FFA732"}}>
      <CopyRight homePageRef={homePageRef} scrollToElement={() => scrollToElement(homePageRef)} />

      </Box>
      </Box>
    </>
  );
}

export default App;
