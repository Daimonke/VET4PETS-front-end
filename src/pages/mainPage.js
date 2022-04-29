import { ToggleButtonGroup } from '@mui/material';
import { ToggleButton } from '@mui/material';
import { Container } from '@mui/material';
import React from 'react'
import { useState } from 'react'
import Header from './Components/Header';
import Pets from './Components/Pets';
import Logs from './Components/Logs';
import Prescriptions from './Components/Prescriptions';
import Footer from './Components/Footer';

export default function MainPage() {
  const [page, setPage] = useState('pets')
  const [showPet, setShowPet] = useState('')
  const [allPetsData, setAllPetsData] = useState([])
  const handleChange = (e) => setPage(e.target.value);

  return (
    <div>
      <Container>
        <Header />
        <ToggleButtonGroup fullWidth={true} color="warning" value={page} exclusive onChange={handleChange}>
          <ToggleButton value="pets">Pets</ToggleButton>
          <ToggleButton value="logs">Logs</ToggleButton>
          <ToggleButton value="prescriptions">Prescriptions</ToggleButton>
        </ToggleButtonGroup>
          {page === 'pets' ? <Pets page={[page, setPage]} showPet={[showPet, setShowPet]} setAllPetsData={setAllPetsData} />
            : page === 'logs' ? <Logs showPet={[showPet, setShowPet]} allPetsData={allPetsData} />
              : <Prescriptions />}
      </Container>
      <Footer />
      </div>
  )
}
