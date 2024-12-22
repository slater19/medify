import React from 'react'
// import BlogCard from '../../HospitalCard/HospitalCard';
import {Container,Box,Grid,Typography} from "@mui/material";

const Blogs = () => {
  return (
    <Box py={6} >
        <Container>
        <Typography fontWeight={300} color="#1B3C74" textAlign ="center">Blogs</Typography>
        <Typography variant="h3"  mb={2} px={3}textAlign ="center">News</Typography>
        <Grid container spacing={5} >
        <Grid item xs={12} md={6}>

        {/* <BlogCard/>  */}
        </Grid>
        <Grid item xs={12} md={6}>
        {/* <BlogCard/>  */}
        </Grid>
        <Grid item xs={12} md={6}>
        {/* <BlogCard/>  */}
        </Grid></Grid>
        </Container>
        </Box>
        




  )
}

export default Blogs
