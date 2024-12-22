import React from 'react'
import { Container , Box, Stack } from "@mui/material";

import SearchHospital from '../components/SearchHospital/SearchHospital';
// import FAQs from '../components/Sections/FAQs/FAQs';
import OurFamilies from '../components/Sections/OurFamilies/OurFamilies';
import Offers from '../components/Sections/Offers/Offers';

import Blogs from '../components/Sections/Blogs/Blogs';
import PatientCaring from '../components/Sections/PatientCaring/PatientCaring';

import Specialization from '../components/Sections/Specialization/Specialization';
import Specialists from '../components/Sections/Specialists/Specialists';
import FAQs from '../components/Sections/FAQs/FAQs';
import HeroServices from '../components/IconLayout/HeroServices';



import Navbar from '../components/Navbar/Navbar';


const Home = () => {
  return (
    <Box>
    <Box  sx={{

  background: "linear-gradient(#E7F0FF, rgba(232,241,255,0.47) 90%, #fff 10%)"
    
  }} mb={4}>
      <Navbar/>
      <Container maxWidth="xl">
      
      <Stack p={{ xs: 2.5, md: 8 }}  position="relative" bgcolor="#fff" zIndex={99} spacing={10} borderRadius="15px">
      {/* mt={{ xs:-2, md:0,lg:6,xl:-10}} */}
      <SearchHospital/>
      <HeroServices/>
      </Stack>
      </Container>  
      </Box>
      <Offers/>
      <Specialization/>
      <Specialists/>
      <PatientCaring/>
      <Blogs/>
      <OurFamilies/>
      <FAQs/>
      </Box>
      
  );
}

export default Home
