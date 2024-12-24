import React from 'react'
import { Typography , Box } from "@mui/material";


const IconCard = ({img,title,bgcolor}) => {
  return (
    <Box  textAlign ="center" bgcolor={bgcolor}>
    <Box component='img' src={img} width={1}     />
    
        
             <Typography  fontSize={{xs:16,md:24}} color='#1B3C74'>{title}</Typography>
             
             
    </Box>
    
      
    
  )
}

export default IconCard