import React from 'react'
import {Button,Typography,Container,Box} from '@mui/material';
import Grid from '@mui/material/Grid';
import SpecializationCard from './SpecializationCard';
import icon1 from '../../../assets/Blood Sample.png';
import icon2 from '../../../assets/Drugstore(1).png';
import icon3 from '../../../assets/Drugstore.png';
import icon4 from '../../../assets/Heart Rate Monitor.png';
import icon5 from '../../../assets/Immune.png';
import icon6 from '../../../assets/Medify.png';
import icon7 from '../../../assets/Stethoscope.png';
import icon8 from '../../../assets/X-Ray.png';



const Specialization = () => {



  
  const Specialists_Icons=[
    {
      img: icon2,
        title:"X-Ray"
        

    },
    {
      img: icon1,
      title:"Blood Test",
      

  },{
    img: icon1,
    title:"Dentistry"
    

},{
  img: icon3,
  title:"MRI Resonance"
  

},{
  img: icon4,
  title:"Laboratory"
  

},{
  img: icon5,
  title:"Drugstore"
  

},
{
  img: icon6,
  title:"Cardiology"
  

},

{
  img: icon8,
  title:"Piscologist"
  

},
    
]

  return (
    <Box  py={6} sx={{

      background: 'linear-gradient( #E7F0FF, #E8F1FF)'}} 
        >
    <Container sx={{textAlign:"center"}}>
    <Typography variant="h2" mb={4}>Find by Specialization </Typography>
    <Grid container spacing={{xs:1,md:3}} mb={5} justifyContent={"center"}>
    
        {Specialists_Icons.map((doc,index) => (
            <Grid item xs={4} md={3} key={doc.title}>
          <SpecializationCard
 
 img={doc.img}
 title={doc.title}
 bgcolor={ '#FFFFFF'}
 
  />
  </Grid>

))}

    </Grid>

    <Button variant="contained" size='large'  disableElevation>View All</Button>
    </Container>


    </Box>
  )
}

export default Specialization
