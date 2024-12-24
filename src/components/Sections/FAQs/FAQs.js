import React from 'react'
import { Container , Box,Typography, autocompleteClasses } from "@mui/material";
import Grid from '@mui/material/Grid2';
import img from '../../../assets/Image-21-1.png.png'

const FAQs = () => {

    const faqs=[{question: 'What is the procedure of booking an appointment at Indus?',
        answer:'The procedure is very simple- you can either book an appointment through a call'
        
    },
        {question:  'What all should I carry for my first appointment?',
            answer: 'Please bring a responsible attendant and all your health related and medication related documents'
        },
        {question:  'In what ways Indus Hospital maintains the quality parameters in healthcare?',
            answer:  'Maintaining quality in equipment, professionals, facilities, costs and ethics is a healthy concern for Indus.' 
        }]

  return (
    <Box py={4}>
    <Container maxWidth="xl">
<Typography   color='#1B3C74' textAlign ="center" fontWeight={600}>Get Your Answer</Typography>
<Typography   variant="h2" mb={2} textAlign="center">Frequently Asked Questions</Typography>
<Grid container spacing={5} alignItems="center">
<Grid item xs={12} md={6}>
<Box component='img' src={img} width={1} height="auto" />
</Grid>
<Grid item xs={12} md={6}>
<Box maxWidth={450}>
    {/* <CustomizedAccordion data={faqs}/> */}
    </Box>
</Grid>
</Grid>



</Container>
</Box>
    
        
  )
}

export default FAQs
