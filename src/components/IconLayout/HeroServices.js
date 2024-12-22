import React, { useMemo } from 'react';
import {Box,Typography,} from "@mui/material";


import Grid from '@mui/material/Grid2';
import IconCard from './IconCard';
import icon1 from '../../assets/card_service.png';
import icon2 from '../../assets/card_service(1).png'
import icon3 from '../../assets/card_service(2).png'
import icon4 from '../../assets/card_service(3).png'
import icon5 from '../../assets/card_service(4).png'







const HeroServices = () => {
    const  Services = useMemo(() => [
        {img:icon1,title:"Doctors"},{img:icon2,title:"Labs"},{img:icon3,title:"Hospitals"},{img:icon4,title:"Medical Store"},
        {img:icon5,title:"Ambulance"}
    ], []);

  return (
    <Box>
   <Typography component="h4" fontSize={20} color='#102851' fontWeight={500} textAlign="center" mb={2}>You may be looking for</Typography>
   <Grid container  justifyContent ={"center"} columnSpacing={{ xs: 1,md: 2 }}>
   {Services.map((Service) => (
    <Grid item key={Service.title} xs={4} md={2.4}>
  <IconCard
  img={Service.img}
  title={Service.title}
  bgColor="#1B3C74"
  />
  </Grid>
  ))}

             
             {/* <Typography  fontSize={{xs:14,md:16}} color='#1B3C74'>{designation}</Typography> */}
             
             </Grid> </Box>
  )
}

export default HeroServices
