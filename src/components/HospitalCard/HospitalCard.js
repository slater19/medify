
import { Container , Box, Stack,Typography,Grid,Divider ,Button,Chip} from "@mui/material";
import React, { useEffect, useState } from "react";
import icon from '../../assets/Blood Sample.png';

import Calendar from '../Calendar/Calendar';

const HospitalCard = ({details,availableSlots,handlebooking,booking=false}) => {
    const [calendar, setcalendar ] = useState(false);
  return (
    <Box sx={{bgcolor:'#fff', borderRadius:2, p:{xs:2,md:4}}}>
    <Stack   mt= {{xs:2,md:3}} spacing={2}  direction="row"  flexWrap={"wrap"}>
    
    <Box component='img' src={icon} width={64} mb={0.5} sx={{alignSelf: 'start'}}/>
    <Box flex={1}>
    <Typography component="h3" fontSize={20} color='primary.main' fontWeight={600}  lineHeight={1} mb={2} textTransform="capitalize">{details["Hospital name"].tolowercase()}</Typography>
    <Typography  fontSize={20} color='primary.main' fontWeight={600} textTransform="capitalize">{`$details["City"].tolowercase()`}</Typography>
 <Typography  fontSize={20}  fontWeight={600}   mb={2} >{details["Hospital Type"]}</Typography>
    
  
    <Stack  spacing="4px" mb={2}  direction="row"  flexWrap={"wrap"}>
    <Typography  fontSize={20} color='primary.main' fontWeight={600} textTransform="capitalize">{`$details["City"].tolowercase()`}</Typography>
    <Typography  fontSize={20} color='primary.main' fontWeight={600} textTransform="capitalize">Free</Typography>
    <Typography  fontSize={20} color='primary.main' fontWeight={600} textTransform="capitalize">$500</Typography>
    <Typography  fontSize={20} color='primary.main' fontWeight={600} textTransform="capitalize">Fee</Typography>
    </Stack>
    <Divider/>
    <Stack spacing={2} my={5} alignItems={'center'}>
    <Box component='img' src={icon} width={64} mb={0.5} sx={{alignSelf: 'start'}}/>
    <Typography  fontWeight={700} fontSize={{xs:14,md:16}} color={"#fff"}>{details["Hospital overall rating"]=="Not Available"?0:details["Hospital overall rating"]}</Typography>
   </Stack></Box>
   <Stack
   justifyContent={booking ? "flex-start" : "flex-end"}
   minWidth= "23%"
  >
   {!booking &&(  
    <>
  
  <Typography  fontWeight={700} textAlign="center" fontSize={{xs:14,md:16}} color={'primary.main'} mb={1}>Available Today</Typography>
 
<Button variant="contained" onClick={ ()=>setcalendar( prev => !prev)}>{!calendar ? "Book" : "Hide"}</Button>
</>
   )}
 
 

{booking &&(
   <Stack   mt= {{xs:2,md:3}} spacing={2}  direction="row"  >
    <Chip
  label={details.bookingTime}
  variant="outlined"
  color="#fff"

  sx={{ fontSize:14 ,borderRadius:2}}
/>
<Chip
  label={details.bookingTime}
  variant="outlined"
  color="#fff"

  sx={{ fontSize:14 ,borderRadius:2}}
/>
</Stack>)}</Stack></Stack>




{calendar &&(
  <Calendar
  details={details}
  availableSlots={availableSlots}
  handlebooking={handlebooking}
/>
)}
 </Box>  
  
  )
}

export default HospitalCard
