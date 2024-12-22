import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';



import {Button,Typography,Container,Box} from '@mui/material';
import Grid from '@mui/material/Grid2';
import SpecialistCard from './SpecialistCard';
import icon1 from '../../../assets/kindpng_1018785 1.png';


const Specialists = () => {

  const Specialists_Icons=[
    {
      img: icon1,
        title:"Dr. Ankur Sharma",
        designation:"Medicine" 

    },
    {
      img: icon1,
        title:"Dr. Ankur Sharma",
        designation:"Medicine" 

    },
    {
      img: icon1,
        title:"Dr. Ankur Sharma",
        designation:"Medicine" 

    },
    {
      img: icon1,
        title:"Dr. Ankur Sharma",
        designation:"Medicine" 

    },
    {
      img: icon1,
        title:"Dr. Ankur Sharma",
        designation:"Medicine" 

    },
    {
      img: icon1,
        title:"Dr. Ankur Sharma",
        designation:"Medicine" 

    },
    {
      img: icon1,
        title:"Dr. Ankur Sharma",
        designation:"Medicine" 

    },
    {
      img: icon1,
        title:"Dr. Ankur Sharma",
        designation:"Medicine" 

    },
    {
      img: icon1,
        title:"Dr. Ankur Sharma",
        designation:"Medicine" 

    },
    {
      img: icon1,
        title:"Dr. Ankur Sharma",
        designation:"Medicine" 

    }]

  return (
    <Box py={4} id="find-doc" >
    <Typography variant="h2"  mb={3} px={2} textAlign ="center">Specialist</Typography>
    
    <Swiper
                  
      spaceBetween={20}
      slidesPerView={2}
      loop={true}
      centeredSlides={true}
      autoplay={{delay:3000,disableOnInteraction:false}}
       modules={[Autoplay, Pagination ]}
      breakpoints={{
        
        767: { 
                slidesPerView: 4,
                
            }}}

              className="mySwiper" >
    
      
      {Specialists_Icons.map((doc,index) => (
         <SwiperSlide> 
         
   
  <SpecialistCard
 
 img={doc.img}
 title={doc.title}
 designation={doc.designation}
  />
  
      </SwiperSlide> 
      ))}
    </Swiper>
       


  

        
  
             
             
    </Box>
    
      
    
  )
}

export default Specialists