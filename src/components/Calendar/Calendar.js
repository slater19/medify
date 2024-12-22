
import React, { useEffect, useState } from "react";
import { Container , Box, Stack,Typography,Grid,Divider ,Button,Chip} from "@mui/material";
import DaySelector from './DaySelector';
import TimeSlotPicker from './TimeSlotPicker';
import { format, startOfDay, isEqual, add } from 'date-fns'


const Calendar = (details,availableSlots ,handlebooking ) => {
    const [selectedDate, setSelecteddate] = useState(startOfDay(new Date()));
    const slots= availableSlots.morning.length+availableSlots.afternoon.length+availableSlots.evening.length
        
      
    
    
   
    return (
        <Box>
         <DaySelector
  selectedDate={selectedDate}
  setSelecteddate={setSelecteddate}
  slots={slots}

  
/>
<TimeSlotPicker
  details={details}
  availableSlots={availableSlots}
  handlebooking={handlebooking}
  selectedDate={selectedDate}
  
/> 

        </Box>
    
  )
}

export default Calendar
