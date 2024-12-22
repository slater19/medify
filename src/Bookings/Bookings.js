import React, { useEffect, useState } from "react";
import { Container , Box, Stack,Typography } from "@mui/material";
import SearchBar from '../components/SearchBar/SearchBar';
import HospitalCard from '../components/HospitalCard/HospitalCard';
import Navbar from '../components/Navbar/Navbar';

import Logo from '../assets/Blood Sample.png';
import img from '../assets/Blood Sample.png';


const Bookings = () => {
    const [bookings,setBookings]=useState([])
    
    const [filteredBookings,setFilteredBookings]=useState([])

    useEffect(() => {
        const localBookings = JSON.parse(localStorage.getItem("bookings")||"[]");
        
        setBookings(localBookings)
    
    }, []);
      
    useEffect(() => {
        setFilteredBookings(bookings)
    }, [bookings]);

  return (
    <>
    <Navbar/>
<Box sx={{borderRadius:"250px 240px 4px 4px"}}>
<Box component='img' src={img} width={1} mb={2}   sx={{  borderRadius:"250px 240px 4px 4px"}}>
  
<Container maxWidth="xl">
<Stack direction={'row'}  alignItems={'flex-start'}>
<Typography component="h4" fontSize={20} color='#1B3C74' fontWeight={500} textAlign="center" mb={2}>My Bookings</Typography>    
<SearchBar list={bookings} filterList={setFilteredBookings}/>

</Stack>
</Container>
</Box>

<Container maxWidth="xl">
<Stack direction={'row'}  alignItems={'flex-start'}>
<Stack mb={{ xs: 4, md: 0 }}  mr="24px" spacing={3} > 
{/* <Typography component="h4" fontSize={20} color='#1B3C74' fontWeight={500} textAlign="center" mb={2}>You may be looking for</Typography> */}

{filteredBookings.length>0 &&
filteredBookings.map((hospital) => (
  <HospitalCard
  key={hospital["Hospital Name"]}
  details={hospital}
  booking={true} 
  />))}



{filteredBookings.length==0 &&(
<Typography variant="h3"  mb={2} >Patients<Box component='span' color="#fff" />No Bookings </Typography>)}
</Stack>
<img
  src={Logo}
  
  width={360}
  height="auto" />

</Stack>
</Container>
</Box>
</>

)
 };



    
  


export default Bookings
