import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Grid, Container, Paper } from '@mui/material'
import axios from 'axios'
import { React, useEffect, useState } from 'react'
import { API_URI } from '../../config'
import Loading from './Loading'
import Search from './Search';

const Item = styled(Paper)(() => ({
  paddingTop: 20,
  paddingBottom: 20,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  wordBreak: 'break-all',
  height: '220px', 
  gap: 20,
  backgroundColor: 'rgb(72, 209, 180)',
}));

export default function Pets(props) {
  const [page, setPage] = props.page
  const [pets, setPets] = useState([])
  const [petsData, setPetsData] = useState([])
  const [loading, setLoading] = useState(true)
  const [showPet, setShowPet] = props.showPet

  function handlePetLog(petid){
    setShowPet(petid)
    setPage('logs')
  }
  
  function handleDelete(id){
    setLoading(true)
    axios.delete(`${API_URI}pets/${id}`)
    .then(() => getPets())
  }

  function getPets(){
    axios.get(`${API_URI}pets`)
      .then(function (res) {
        setPetsData(res.data)
        setPets(res.data)
        props.setAllPetsData(res.data)
        setShowPet('')
        setLoading(false)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  useEffect(() => {
    getPets()
  }, [])

  return (
    <Container disableGutters={true} >
      {loading ? <Loading /> :
      <div>
        <Search data={petsData} setPets={setPets}></Search>
        <Grid container spacing={3} pt={2} >
          {pets.map(pet => {
            return (
              <Grid item xs={12} sm={6} lg={4} key={pet.id}>
                <Item>
                  <Typography variant='h5' >{pet.name}</Typography>
                  <Container disableGutters={true}>
                  <Typography variant='h5' >{pet.dob}</Typography>
                  <Typography variant='h5' >{pet.client_email}</Typography>
                  </Container>
                  <Container disableGutters={true} sx={{display: 'flex', justifyContent: 'center', gap: 2}}>
                  <Button variant='contained' color='warning' onClick={() => handlePetLog(pet.id)}>VIEW LOGS</Button>
                  <Button variant='contained' color='error' onClick={() => handleDelete(pet.id)}>DELETE</Button>
                  </Container>
                </Item>
              </Grid>
            )
          })}
        </Grid>
        </div>
      }
    </Container>
  )
}
