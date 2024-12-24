import React from 'react'
import { Container , Box, Typography ,  } from "@mui/material";
import Grid from '@mui/material/Grid';
import img from '../../../assets/div.elementor-widget-wrap.png'

const OurFamilies = () => {
  return (
    <Box  pt={3} sx={{ background:'linear-gradient(#E7F0FF,#E8F1FF)'}}>
      
        <Container>
      <Grid container alignItems={"center"} spacing={{xs:2,md:1}}>
      <Grid item xs={12} md={4}>
      <Typography  color='#2AA7FF' fontWeight={600} >CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</Typography>  
      
          
      <Typography variant="h2"  >Our Families </Typography> 
      <Typography lineHeight={1.8} color='#77829D' fontWeight={500} textAlign="center" mb={2}>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</Typography>      
      </Grid>
      <Grid item xs={12} md={4}>
      <Box component='img' src={img} width={1} height="auto"/>


      </Grid></Grid>
      </Container>
      </Box>

  )
}

export default OurFamilies
