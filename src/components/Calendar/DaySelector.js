
import React, { useEffect, useState } from "react";
import { format, startOfDay, isEqual, add } from 'date-fns'
import { Container , Box, Stack,Typography,Grid,Divider ,Button,Chip} from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';

 const DaySelector = ({selectedDate,
    setSelecteddate,
    slots
   }) => {

     const date= useState(startOfDay(new Date()));
     const dateItems= []
     for (var i=1;i<7;i++){dateItems.push(add(date,{days:i}))}

     const formatDate=(day)=>{
        
    
         if(isEqual(date,day))return 'Today'
    
         else if(isEqual(date,add(date,{days:-1})))return 'Tomorrow'
         else{return format(day,'E, d LLL')}
       }
       const handleClick=(day)=>{setSelecteddate(day)}

      

   return (
    <Stack  pt={3} position='relative'>
    <Swiper
      spaceBetween={11}
      slidesPerView={3}
      loop={false}
      breakpoints={{
        
            

            767: {
                slidesPerView: 3,
                spaceBetween: 30,
            }}}
                    className="mySwiper"
      
      
    >
      
      {dateItems.map((day,index) => (
        <SwiperSlide 
         key={index}>
            <Stack   textAlign ="center" 
            onClick={() =>handleClick(day) }
            >
        <Typography  fontSize={{xs:14,md:16}} fontWeight={500}>{formatDate(day)}</Typography>
        <Typography  color='primary.main'   fontSize={{xs:14,md:16}} >{`${slots} slots`}</Typography>
        {/* <Stack height={1} alignItems={'center'} justifyContent= {'flex-end'}>   */}
        <Box  mt='4px' mx="auto" height={"4px"} width={{xs:1,}} position='relative'  left='50%' bottom={0}  bgcolor='#fff'>
        </Box>
       
        </Stack>
    </SwiperSlide>
  ))}

<span>
<Box  display='block'>

</Box>
</span>
<span>
<Box  display='block'>

</Box>
</span>

</Swiper>

    <Box  mt='4px' height={"4px"} width={{xs:1,}} position='absolute'  left='50%' bottom={0}  bgcolor='#fff'>

    </Box>
    </Stack>
   )
 }

export default DaySelector
