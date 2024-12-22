import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import {Button,Typography,Container,Box} from '@mui/material';
import SwiperCore, { Pagination } from "swiper/core";
import Grid from '@mui/material/Grid2';

import Offers1 from '../../../assets/kindpng_1018785 1.png';
import Offers2 from '../../../assets/kindpng_1018785 1.png';




const Offers = () => {
  return (
    <Box py={6}>
      <Container maxWidth="xl">
      <Swiper
      spaceBetween={30}
      slidesPerView={1}
      pagination={{
        clickable: true
      }}
      breakpoints={{
        
            

            767: {
                slidesPerView: 3,
                
            }}}
                    className="mySwiper"
      
      
    >
      
      
        <SwiperSlide>
         
            
         <Box component="img" src={Offers1}         />
         </SwiperSlide>   
         <SwiperSlide>
         
            
         <Box component="img" src={Offers1}         />
         </SwiperSlide>   

         </Swiper>
         
            
         
        
    
    </Container>
    </Box>
  )
}

export default Offers
