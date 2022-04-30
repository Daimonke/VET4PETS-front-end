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

export default function AddPrescription(props) {
  const [open, setOpen] = React.useState(false);
  const [petId, setPetId] = React.useState('');
  const [medId, setMedId] = React.useState('');
  const [comment, setComment] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
      e.preventDefault()
      axios.post(`${API_URI}prescriptions`, {
        pet_id: Number(petId),
        medication_id: Number(medId),
        comment: comment
      })
      .then(function (response) {
        props.getPrescriptions(true)
        handleClose()
        setPetId('')
        setMedId('')
        setComment('')
      })
      .catch(function (error) {
        alert(error);
      });
  }


  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Button variant='contained' color='inherit' onClick={handleOpen}>Add prescription</Button>
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
        <InputLabel htmlFor="component-simple">Pet ID</InputLabel>
        <Input id="petid" value={petId} onInput={(e) => setPetId(e.target.value)} />
      </FormControl>
      <FormControl required variant="standard" sx={{width: '60%'}}>
        <InputLabel htmlFor="component-simple">Med ID</InputLabel>
        <Input id="desc" value={medId} onInput={(e) => setMedId(e.target.value)} />
      </FormControl>
      <FormControl required variant="standard" sx={{width: '60%'}}>
        <InputLabel htmlFor="component-simple">Comment</InputLabel>
        <Input id="status" value={comment} onInput={(e) => setComment(e.target.value)} />
      </FormControl>
      <Button type='submit' variant='contained' color='warning' sx={{width: '60%'}}>ADD</Button>
    </Box>
      </Modal>
    </div>
  );
}