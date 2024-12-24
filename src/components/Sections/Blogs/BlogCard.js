import React from 'react'
import { Typography , Box } from "@mui/material";
import img from '../../../assets/image 3.png';


const BlogCard = () => {
  return (
    <Box  textAlign ="center" >
    <Box component='img' src={img} width={1}   mb={2}  />
    
        
             <Typography  fontSize={{xs:16,md:24}} color='#1B3C74'>de</Typography>
             
             
    </Box>
    
      
    
  )
}

export default BlogCard