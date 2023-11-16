import React from 'react'
import { Box, Typography } from '@mui/material'
import Gym_pic from '../assets/img/gym-slider.png'
const Explainer = () => {
  return (
    <Box sx={{mt:{lg:'180px', xs:'70px'},ml:{sm:'50px'}}} position='relative' p='20px'>
  <Typography color="#FF2625" fontWeight={700} sx={{fontSize:{lg:'44px', xs:'40px'}}} mb='23px' mt='30px'>Workout. <br /> Diet. <br />Track.</Typography>
  <Typography fontWeight={500} fontSize="22px" lineHeight="35px" mb={3}>Discover your best self with Smart Gym Tracker.
   <br /> Tailored fitness plans, easy progress tracking,
    <br /> and timely reminders - all personalized just for you.
     <br /> Your journey to a healthier you starts here.
     </Typography>
     <img src={Gym_pic} alt="banner" className='gym-pic' />
    </Box>
  )
}

export default Explainer