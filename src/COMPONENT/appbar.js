import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GoodyCode from "./IMAGE/GoodyCode.png"
import MyCv from "./IMAGE/MyCv.pdf"


const drawerWidth = 240;
const navItems = [{
  about:'About',
  //  work:"Work",
  services:"Services",
    testimonies:"Skills",
     contact: 'Contact',
      cv:"Download CV"}];
const logo = GoodyCode
const cvFileName = MyCv

function DrawerAppBar(props) {
  const { window, scrollToElement, aboutPageRef, skillPageRef, servicesPageRef, contactPageRef } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding sx={{color: '#000'}}>
            <ListItemButton sx={{ textAlign: 'center',display: 'flex', gap:"20px", flexDirection:"column" }}>
            <Typography onClick={() => scrollToElement(aboutPageRef)}>
               {item.about}
                </Typography>
                <Typography onClick={() => scrollToElement(skillPageRef)}>
               {item.testimonies}
                </Typography>
                <Typography onClick={() => scrollToElement(servicesPageRef)}>
               {item.services}
                </Typography>
                <Typography onClick={() => scrollToElement(contactPageRef)}>
               {item.contact}
                </Typography>
                <a href={MyCv} download={cvFileName} >
                   <Button style={{background:"#fff", color:"#000" }}>
                      {item.cv}
                    </Button>
                </a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{backgroundColor:"#000" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <Stack flexDirection="row" gap="15rem">
            <MenuIcon sx={{color:"#FFA732"}}/>
              <Typography>    <img src={logo} alt="logo" style={{ maxWidth: '60px' }} /></Typography>
            </Stack>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            
              <Typography  >
                <img src={logo} alt="logo" style={{ maxWidth: '80px' }} />
              </Typography>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#FFA732', display: 'flex',  gap:"20px", textTransform: 'capitalize' }}>
               <Typography onClick={() => scrollToElement(aboutPageRef)}>
               {item.about}
                </Typography>
                <Typography onClick={() => scrollToElement(skillPageRef)}>
               {item.testimonies}
                </Typography>
                <Typography onClick={() => scrollToElement(servicesPageRef)}>
               {item.services}
                </Typography>
                <Typography onClick={() => scrollToElement(contactPageRef)}>
               {item.contact}
                </Typography>
                <a href={MyCv} download={cvFileName}>
                   <Button style={{background:"#fff", color:"#000" }}>
                      {item.cv}
                    </Button>
                </a>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Box >
        
        </Box>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
  scrollToElement: PropTypes.func,
  aboutPageRef: PropTypes.object,
  skillPageRef: PropTypes.object,
  workPageRef: PropTypes.object,
  contactPageRef: PropTypes.object,
  appbarPageRef: PropTypes.object,
};
export default DrawerAppBar;
