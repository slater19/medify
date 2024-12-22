import React from 'react'
// import Chip from '@mui/material/Chip';
import { Container , Box, Stack,Typography,Grid,Divider ,Button,Chip} from "@mui/material";

function TimeSlotPicker({details,availableSlots,handlebooking,
  selectedDate}) {

    const Chips=(props)=>(
    <Chip label={props.label} variant="outlined" onClick={props.handleClick} />)
    const handleClick=(slot)=>{handlebooking({...details,bookingDate:selectedDate,bookingTime:slot
      })}
  return (
    <Stack spacing={{ xs: 4, md: 0 }}   pt={3}  > 

    {availableSlots.morning.length>0 &&(
      <Stack   mb={2}  direction="row"  flexWrap={"wrap"} alignItems={'center'} >
      <Typography width={{ xs: 4, md: 0 }} fontSize={{ xs: 4, md: 0 }} >morning</Typography>
      
      {availableSlots.morning.map((slot) => (
          <Chips
          key={slot}
          label={slot}
          handleClick={() => handleClick(slot)} 
          />))}</Stack>
    )}
    {availableSlots.afternoon.length>0 &&(
      <Stack   mb={2}  direction="row"  flexWrap={"wrap"} alignItems={'center'} >
      <Typography width={{ xs: 4, md: 0 }} fontSize={{ xs: 4, md: 0 }} >morning</Typography>
  
    {availableSlots.afternoon.map((slot) => (
      <Chips
      key={slot}
      label={slot}
      handleClick={() => handleClick(slot)} 
      />))}</Stack>)}
{availableSlots.evening.length>0 &&(
 
  <Stack   mb={2}  direction="row"  flexWrap={"wrap"} alignItems={'center'} >
  
  <Typography width={{ xs: 4, md: 0 }} fontSize={{ xs: 4, md: 0 }} >evening</Typography>

{availableSlots.evening.map((slot) => (
  <Chips
  key={slot}
  label={slot}
  handleClick={() => handleClick(slot)} 
  />
))}</Stack>)
    
    }</Stack>)
}

export default TimeSlotPicker
