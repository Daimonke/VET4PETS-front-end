import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Input } from '@mui/material';
import axios from 'axios';
import { API_URI } from '../../config';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'rgb(182, 255, 239)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '6px',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '20px'
};

export default function AddPet(props) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [dob, setDob] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
      e.preventDefault()
      axios.post(`${API_URI}pets`, {
        name: name,
        dob: dob,
        client_email: email
      })
      .then(function (response) {
        if(props.getPets) props.getPets()
        handleClose()
      })
      .catch(function (error) {
        alert(error);
      });
  }


  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Button variant='contained' color='inherit' onClick={handleOpen}>Add pet</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
      component="form"
      sx={style}
      autoComplete="off"
      onSubmitCapture={(e)=> handleSubmit(e)}
    >
      <FormControl  required variant="standard" sx={{width: '60%'}}>
        <InputLabel htmlFor="component-simple">Name</InputLabel>
        <Input id="name" value={name} onInput={(e) => setName(e.target.value)} />
      </FormControl>
      <FormControl required variant="standard" sx={{width: '60%'}}>
        <InputLabel htmlFor="component-simple">Date of birth YYYY-MM-DD</InputLabel>
        <Input id="dob" value={dob} onInput={(e) => setDob(e.target.value)} />
      </FormControl>
      <FormControl required variant="standard" sx={{width: '60%'}}>
        <InputLabel htmlFor="component-simple">Email</InputLabel>
        <Input type='email' id="email" value={email} onInput={(e) => setEmail(e.target.value)} />
      </FormControl>
      <Button type='submit' variant='contained' color='warning' sx={{width: '60%'}}>ADD</Button>
    </Box>
      </Modal>
    </div>
  );
}