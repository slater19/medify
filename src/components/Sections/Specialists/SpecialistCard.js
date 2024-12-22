import React from 'react'
import { Typography , Box } from "@mui/material";


const SpecialistCard = ({img,title,designation}) => {
  return (
    <Box  textAlign ="center">
    <Box component='img' src={img} width={1} mb={2}   sx={{borderRadius:'250px 240px 4px 4px'}}/>
        
             <Typography  fontSize={{xs:16,md:24}} color='#1B3C74'>{title}</Typography>
             <Typography  fontSize={{xs:14,md:16}} fontWeight={500} color='#1B3C74'>{designation}</Typography>
             
    </Box>
    
      
    
  )
}

export default SpecialistCard