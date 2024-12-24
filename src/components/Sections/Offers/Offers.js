import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import {Button,Typography,Container,Box} from '@mui/material';


import { Pagination } from 'swiper/modules';


import Offers1 from '../../../assets/image 1(1).png'
import Offers2 from '../../../assets/image 1.png'





const Offers = () => {
  return (
    <Box py={6}>
      <Container maxWidth="xl">
      <Swiper
                  
                  spaceBetween={30}
                  slidesPerView={1}
                  modules={[Pagination]}
                  
                  pagination={{clickable:true}} 
                   

                  breakpoints={{
                    
                    767: { 
                            slidesPerView: 3
                            
                        }}}
            
                           >
                
      
      
        <SwiperSlide>
         
            
         <Box component="img" src={Offers1}         />
         </SwiperSlide>   
         <SwiperSlide>
         
            
         <Box component="img" src={Offers2}         />
         </SwiperSlide>   
         <SwiperSlide>
         
            
         <Box component="img" src={Offers1}         />
         </SwiperSlide>   
         <SwiperSlide>
         
            
         <Box component="img" src={Offers2}         />
         </SwiperSlide>   
         <Box component="img" src={Offers1}         />
         
         <SwiperSlide>
         
            
         <Box component="img" src={Offers2}         />
         </SwiperSlide>  
         

         </Swiper>
         
            
         
        
    
    </Container>
    </Box>
  )
}

export default Offers
