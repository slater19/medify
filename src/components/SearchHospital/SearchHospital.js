import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Select, MenuItem, Box, Button,} from "@mui/material";


const SearchHospital = () => {

    const [states,setState ]=useState([]);
    const [cities,setCity ]=useState([]);
    const [formData,setFormData ]=useState({state:"",city:""});
    const navigate = useNavigate();
 
    useEffect(()=>{
        const fetchStates = async () => {
            try {
              const res = await axios.get("https://meddata-backend.onrender.com/states")
              setState(res.data)
            }
              
             catch (e) {
                console.error("Error fetching data: ",e);
            }
          }; 
      fetchStates();
      },[]);

      useEffect(()=>{
        const fetchCities = async () => {
            try {
              const res = await axios.get(`https://meddata-backend.onrender.com/cities/${formData.state}`)
              setCity(res.data)
            }
              
             catch (e) {
                console.error("Error fetching data: ",e);
            }
          }; 
          if(formData.state!="")
      fetchCities();
      },[formData.state]);



      const handleChange = (e) => {
        const  {name,value}  = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };  

      const handleSubmit=(e)=>{
        e.preventDefault()
        if(formData.state &&formData.city)
        navigate(`/search?state=${formData.state} &city=${formData.city}`)
    
      }

    return (
    
    <Box component='form'   sx={{ display:"flex" ,flexDirection:{ xs: "column", md: "row" }  ,justifyContent:"space-between", gap:4}} onSubmit={handleSubmit}>
 
 <Select
    required
    id="state"
    name="state"
    
    onChange={handleChange}
    value={formData.state}
    sx={{  minWidth:200,width:"100%"}}>
  
  <MenuItem disabled value="" selected>state</MenuItem>
    {states.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
  </Select>
  <Select
    required
    id="city"
    name="city"
    
    onChange={handleChange}
    value={formData.city}
    sx={{  minWidth:200,width:"100%"}}>
  
    <MenuItem disabled value="" selected>city</MenuItem>
    {cities.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
  </Select>

  <Button variant="contained" sx={{py: '15px' ,px:8,flexShrink:0}}  type="submit">Search</Button>
 </Box>
  )
}

export default SearchHospital
