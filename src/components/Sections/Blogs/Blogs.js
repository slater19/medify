import React from 'react'
import BlogCard from './BlogCard';
import {Container,Box,Typography} from "@mui/material";
import Grid from '@mui/material/Grid2';

const Blogs = () => {
  return (
    <Box py={6} >
        <Container>
        <Typography fontWeight={600} color="#2AA7FF" textAlign ="center">Blogs & News</Typography>
        <Typography variant="h2"  mb={2} textAlign ="center">Read Our News</Typography>
        <Grid container spacing={3} >
        <Grid item xs={12} md={4}>

        <BlogCard/> 
        </Grid>
        <Grid item xs={12} md={4}>
        <BlogCard/> 
        </Grid>
        <Grid item xs={12} md={4}>
        <BlogCard/> 
        </Grid></Grid>
        </Container>
        </Box>
        




  )
}

export default Blogs
