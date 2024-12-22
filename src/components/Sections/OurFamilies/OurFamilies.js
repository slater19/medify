import React from 'react'
import { Container , Box, Typography ,  } from "@mui/material";
import Grid from '@mui/material/Grid2';
import img from '../../../assets/card_service.png';

const OurFamilies = () => {
  return (
    <Box  pt={3} sx={{  borderRadius:"250px 240px 4px 4px"}}>
      
        <Container>
      <Grid container spacing={{xs:2,md:10}}>
      <Grid item xs={12} md={6}>
      <Typography component="h4" fontSize={20} color='#1B3C74' fontWeight={500} textAlign="center" mb={2}>My Bookings</Typography>      
      
      <Typography component="h4" fontSize={20} color='#1B3C74' fontWeight={500} textAlign="center" mb={2}>My Bookings</Typography>      
      <Typography variant="h3"  mb={2} >Patients<Box component='span' color="#fff" />No Bookings </Typography> 
      <Typography component="h4" fontSize={20} color='#1B3C74' fontWeight={500} textAlign="center" mb={2}>My Bookings</Typography>      
      </Grid>
      <Grid item xs={12} md={6}>
      <Box component='img' src={img} width={1} mb={0.5}   sx={{  borderRadius:"250px 240px 4px 4px"}}/>


      </Grid></Grid></Container></Box>

  )
}

export default OurFamilies
