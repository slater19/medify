import React, { useMemo } from 'react';
import { Container , Box, Stack,Typography,Grid,Link  } from "@mui/material";

import fb from '../../assets/a.elementor-icon(1).png'
import twitter  from '../../assets/a.elementor-icon(2).png'
import yt  from '../../assets/a.elementor-icon(3).png'
import pinterest  from '../../assets/a.elementor-icon.png'
import icon5  from '../../assets/Medify1.png';

const Footer = () => {
  return (

    <Box bgcolor="#1B3C74" pb={3} pt={6}>
      {/* #00A500 #2AA7FF */}
    <Container maxWidth="xl">
    <Grid container spacing={4}>
    <Grid item  xs={12} md={4.5}>
    <Stack height={1} alignItems='flex-start' justifyContent= 'space-between'>
    <Box component="img" src={icon5}     mb= {2}        height= {36}   alt="medify"/>
    <Stack spacing={1.5} direction={'row'}  >
    <Box component="img" src={fb}       height= {36}  />
    <Box component="img" src={twitter}      height= {36}  />
    <Box component="img" src={yt}       height= {36}  />
    <Box component="img" src={pinterest}       height= {36}  />
    </Stack></Stack>
    </Grid>


    
    
     
<Grid item  xs={12} md={2.5}>
<Stack spacing={2}>
        
<Link>About us</Link>
<Link>our pricing</Link>
<Link>our gallery</Link>
<Link>appointment</Link>
<Link>privacy policy</Link>
</Stack></Grid>


<Grid item  xs={12} md={2.5}>
<Stack spacing={2} >
<Link>Orthology</Link>
<Link>Nerology</Link>
<Link>Dental</Link>
<Link>Opthalmology</Link>

<Link>Cardilogy</Link>
</Stack>
</Grid>

<Grid item xs={12} md={2.5}>
<Stack spacing={2} >
        
<Link>About us</Link>
<Link>our pricing</Link>
<Link>our gallery</Link>
<Link>appointment</Link>
<Link>privacy policy</Link>
</Stack></Grid></Grid>


<Typography fontWeight={300} color="#fff" fontSize={14} pt={3} mt={5}>Copywright

</Typography>
</Container>
</Box> 
  );        
}

export default Footer
