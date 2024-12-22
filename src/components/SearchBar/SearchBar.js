import React, { useEffect, useState,useMemo } from "react";

import { Container , Box, Stack,Typography,Grid,Divider ,Button,Chip,Link,TextField} from "@mui/material";

const SearchBar = (list,filterList) => {
    const [inputText, setInputText] = useState("");



      const filteredList = useMemo(() =>{
       if(!inputText.trim()) return list
       return list.filter((item)=>
        item["Hospital Name"].toLowerCase().includes(inputText.trim().toLowerCase()))
      },[inputText,list]);
      
      

      const handleSubmit = (e) => {
    
        e.preventDefault();
        filterList(filteredList)
    }

  return (
    <form onSubmit = {handleSubmit}>
    <Stack
    spacing={2} direction={'row'} 
  ></Stack>
  <TextField
  label="SearchBar"
  variant="Outlined"
       fullWidth
          value={inputText}
          sx={{width:1}}
          
          
          onChange={(e) => {
            setInputText(e.target.value);
        }}
        required 
        />
        
    <button type = 'submit'>Click to submit</button>
</form>
  )
}

export default SearchBar


