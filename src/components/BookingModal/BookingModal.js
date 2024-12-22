
import React, { useEffect, useState } from "react";
import format from "date-fns/format"; 
import { Container , Box, Stack,Typography,Grid,Divider ,Button,Chip,TextField,Modal} from "@mui/material";

const BookingModal = ({isopen ,setIsOpen ,bookingDetails}) => {

  const [email, setEmail] = useState("");
  
  const handleBooking  = (e) => {
    
    e.preventDefault();
    triggerEvent();

  
    const oldBookings = JSON.parse(localStorage.getItem("bookings")||"[]");
    
    localStorage.setItem('bookings', JSON.stringify([...oldBookings,{...bookingDetails,bookingEmail:email},]));
    setEmail("")
    setIsOpen(false);
}
 
const triggerEvent  = () => {

  function triggerFirstVisitEvent(){
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'new_subscriber',
    'formLocation': 'footer'
    });}
    triggerFirstVisitEvent();}

    const formatDate=(day)=>{
           if(day){
          
            const date = new Date(day)

            return format(date,'E, d LLL')}
              else
               return null
            }

  return (
    <Modal open={isopen} onClose = {() => setIsOpen(false)}>
         <Box  sx={{width:"95%",maxWidth:600 ,position:'absolute', top:"50%", left:"50",bgcolor:'#fff',borderRadius:2}}>
    <Typography component="h3" variant="h3">Confirm Booking</Typography>
    <Typography  fontSize={14} mb={3} ><Box component='span' color="#fff" > Please enter your email{""}</Box> 
    <Box component='span' fontWeight={500} > Please enter your email{""}</Box> 
    </Typography>
   
   
    <form onSubmit={handleBooking}>
      <Stack  alignItems={'flex-start'} spacing={2}>
     
      <TextField
     label =" Please enter your email"
     type="email"
      variant="outlined" 

            onChange={(e) => 
            setEmail(e.target.value)
          }
            
          value={email}
            fullWidth
            
              required
             
            
      />
          <Stack direction="row"  spacing={1}>
  
<Button
size="large"
type="submit"
  variant="contained"
  disableElevation
>Confirm
</Button>
<Button
size="large"
    onClick={() =>setIsOpen(false) }
  
  variant="contained"
  disableElevation
>Cancel
</Button> 
</Stack>
          </Stack>
    </form>
    </Box>
    </Modal>
  )
}

export default BookingModal
