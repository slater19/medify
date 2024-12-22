import React,{useState} from 'react'
import { Container , Box, Stack,Typography,Grid,Divider ,Button,Chip,Link} from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import Logo from '../../assets/Medify.png';


const Navbar = () => {
  
  const isMobile = useMediaQuery('(max-width: 900px)')
  const [isopen ,setIsOpen ]=useState(false)
  return (
    <header>
 <Box p={1} bgcolor="#2AA7FF">
  <Typography  fontSize={14} color='#fff' textAlign ="center" >We are committed to the achievement and maintenance of excellence in education, research and healthcare for the benefit of humanity”

</Typography>
</Box>
<Container maxWidth="xl">
<Stack
     alignItems='center' justifyContent='space-between'
  spacing={2} py={2} direction='row'
  >
    <Link href="/" >
    <img
  src={Logo}
  alt="Logo"
  
  height={27} /></Link>
  <Stack
    py={2} alignItems={{xs:'flex-start',md:'center'}} 
  spacing={4} direction={{xs:'column',md:'row'}} pt={{xs:12,md:1}} pb={{xs:4,md:1}} px={{xs:4,md:0}}
  >
  <Link>Find Doctors</Link>
  <Link href="/search" >Hospitals</Link>
  <Link>Medicines</Link>
  <Link>Surgery</Link>
  <Link>Software</Link>
  <Link>Facilities</Link>
  <Link href="/my-bookings" ><Button variant="contained">My Bookings</Button></Link>
  </Stack></Stack>
</Container>


 



    </header>
  )
}

export default Navbar
