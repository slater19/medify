 
import React, { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";
import axios from "axios";
import SearchHospital from '../components/SearchHospital/SearchHospital';
import BookingModal from '../components/BookingModal/BookingModal';
import HospitalCard from '../components/HospitalCard/HospitalCard';
import Navbar from '../components/Navbar/Navbar';
import { Container , Box, Stack,Typography,Grid,Divider ,Button,Chip} from "@mui/material";
import Logo from '../assets/Blood Sample.png';


function Search() {

  const api="https://restcountries.com/v3.1/all"
  let [searchParams, setSearchParams] = useSearchParams();
  const [hospitals,setHospitals]=useState([])
  const [state,setState ]=useState(searchParams.get('state'))
  const [city,setCity ]=useState(searchParams.get('city'))
  const slots= {
    morning: [
        
        "11:30 AM"
      ],
    afternoon: ["12:00 PM", "12:30 PM" ,"01:30 PM" , "02:00 PM","02:30 PM" ],
    evening:["06:00 PM","06:30 PM","7:00 PM","07:30 PM",]
    }
    const [isLoading, setIsLoading] = useState(false);
    const [bookingDetail,setBookingDetail]=useState({})
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [booking, setBooking] = useState(false);
  
  
  
  useEffect(()=>{
    const getHospitals = async() => {
        setHospitals([])
        setIsLoading(true)
    try {
      const res = await axios.get(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`)

      const data=await res.json(); 
      setHospitals(data.data)
      setIsLoading(false)
      // TODO: CRIO_TASK_MODULE_CART - Pass Bearer token inside "Authorization" header to get data from "GET /cart" API and return the response data
    } catch (error) {
        console.error("Error fetching data: ",error);
        setIsLoading(false)
    }

  };
  if(state && city)
  getHospitals();
},[state,city]);

  
useEffect(() => {
  setState(searchParams.get('state'))
  setCity(searchParams.get('city'))
}, [searchParams])


const handleModalOpen = (detail) =>{
   setBookingDetail(detail)
   setIsModalOpen(true)
 }
  


return (
<>
<Navbar/>
<Box sx={{ width:'100%' ,pl:0}}>


<Box sx={{ width:'100%' ,pl:0,position:'relative'}}>
<Container maxWidth="xl"sx={{ width:'100%' ,pl:0,position:'relative'}}>
<SearchHospital/>  
</Container>
</Box>
<Container maxWidth="xl"sx={{ pt:8,pb:10}}>
{hospitals.length>0&&(
  <Box sx={{mb:3}}>
    <Typography component="h1" fontSize={20} color='primary.main' fontWeight={600}  lineHeight={1} mb={2} textTransform="capitalize">{`{hospitals.length} centers`}

    </Typography>
    <Stack  spacing="4px" mb={2}  direction="row"  flexWrap={"wrap"}>
    <img
  src={Logo}
  alt="Logo"
  width={360}
  height="auto" />
   <Typography  color='primary.main'   lineHeight={1} >Book Doctors

</Typography></Stack></Box>
)}


 <Stack direction={"row"}  alignItems={'flex-start'}>
<Stack mb={{ xs: 4, md: 0 }}  mr="24px" spacing={3} > 
{hospitals.length>0&&
hospitals.map((hospital) => (
  <HospitalCard
 key={hospital["Hospital Name"]}
  details={hospital}Select
   availableSlots={"availableSlots"}
    handlebooking={handleModalOpen} 
  />))}
 {isLoading&& (<Typography variant="h3" bgcolor="#fff" borderRadius={2} p={3}>Loading...</Typography>)}
 {!state && (<Typography variant="h3" bgcolor="#fff" borderRadius={2} p={3}>Please  state and city</Typography>)}
 </Stack>
<img
  src={Logo}
  alt="Logo"
  width={360}
  height="auto" />
  </Stack>
  </Container>
  <BookingModal
 isopen={isModalOpen} setIsOpen={setIsModalOpen} bookingDetails={bookingDetail}
  />





</Box>
</>

)
 };

export default Search;
