import React from 'react'
import {Container,Box,Typography, ListItemText,} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ListItemIcon from '@mui/material/ListItemIcon';


import img from '../../../assets/Group 1000011062.png'
import img1 from '../../../assets/svg.h2d-208731fd.png';
import Grid from '@mui/material/Grid';

const PatientCaring = () => {
  return (
    <Box py={6}  sx={{background: 'linear-gradient( #E7F0FF, #E8F1FF)'}} >
        <Container>
        <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
        <Box component='img' src={img} width={1}  />
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography fontWeight={600} color="#2AA7FF">Help Patients From Around Globe</Typography>
        <Typography variant="h2"  mb={1} >Patients<Box component='span' color="#2AA7FF" >Caring</Box></Typography>
        <Typography  color='#77829D' lineHeight={1.8} >Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</Typography>
        
        


    


    <List sx={{fontSize:{xs:16,md:18}}}>
          <ListItem disableGutters>
             <ListItemIcon sx={{minWidth:32}}>
              <Box component='img' src={img1} width={22} height={22} />
</ListItemIcon>
<ListItemText primary="Stay Updated About Your Health"></ListItemText>
</ListItem>
<ListItem disableGutters>
             <ListItemIcon sx={{minWidth:32}}>
              <Box component='img' src={img1} width={22} height={22} />
</ListItemIcon>
<ListItemText primary="Check Your Results Online"></ListItemText>
</ListItem>
<ListItem disableGutters>
             <ListItemIcon sx={{minWidth:32}}>
              <Box component='img' src={img1} width={22} height={22} />
</ListItemIcon>
<ListItemText primary="Manage Your Appointments"></ListItemText>
</ListItem>

</List>
</Grid>
</Grid>
       
        </Container>
        </Box>
  )
}

export default PatientCaring
