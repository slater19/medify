import React from 'react'
import { Typography , Box } from "@mui/material";
// import icon1 from '../../../assets/2048px-Facebook_Logo_2023.png';

const SpecializationCard = ({img,title,bgcolor}) => {
  return (
    <Box  textAlign ="center" bgcolor={bgcolor}>
    <Box component='img' src={img} width={0.5} height={36}    sx={{borderRadius:'250px 240px 4px 4px'}}/>
    
        
             <Typography  fontSize={{xs:16,md:24}} color='#1B3C74'>{title}</Typography>
             
             
    </Box>
    
      
    
  )
}

export default SpecializationCard