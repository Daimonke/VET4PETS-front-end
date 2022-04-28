import { ToggleButtonGroup } from '@mui/material';
import { ToggleButton } from '@mui/material';
import { Container } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { API_URI } from '../config';
import Header from './Components/Header';
import Pets from './Components/Pets';
import Logs from './Components/Logs';
import Prescriptions from './Components/Prescriptions';

export default function MainPage() {
  const [page, setPage] = useState('pets')

  const handleChange = (e) => setPage(e.target.value);

  // function signUp() {
  //   axios.defaults.baseURL = API_URI
  //     axios.post('/sign-up', {
  //       username: username,
  //       password: password
  //     })
  //       .then(function (res) {
  //         console.log(res)
  //         })
  //       .catch(function (error) {
  //         console.log(error)
  //       })
  //   }
  return (
    <div>
      <Container>
        <Header />
        <ToggleButtonGroup fullWidth={true} color="warning" value={page} exclusive onChange={handleChange}>
          <ToggleButton value="pets">Pets</ToggleButton>
          <ToggleButton value="logs">Logs</ToggleButton>
          <ToggleButton value="prescriptions">Prescriptions</ToggleButton>
        </ToggleButtonGroup>
        <Container>
          {page === 'pets' ? <Pets /> : page === 'logs' ? <Logs/> : <Prescriptions/>}
        </Container>
      </Container>
    </div>
  )
}
