import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Search(props) {
  function handlePets(value){
    props.setPets(props.data.filter(pet => pet.name.includes(value)))
  }
  return (
    <Autocomplete
      disablePortal
      id="search"
      onInputChange={(e, value) => handlePets(value)}
      options={props.data}
      getOptionLabel={(option) => option.name}
      sx={{ mt: 2 }}
      renderInput={(params) => <TextField {...params} label='Search by name' />}
    />
  );
}
