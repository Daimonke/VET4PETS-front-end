import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Loading from './Loading'
import { API_URI } from '../../config'
import { Container } from '@mui/material'
import VerticalTabs from './LogsTabs'
import { Autocomplete } from '@mui/material'
import { TextField } from '@mui/material'
import AddPrescription from './AddPrescription'

export default function Prescriptions(props) {
  const [showPet] = props.showPet
  const [logs, setLogs] = useState([])
  const [showPrescriptions, setShowPrescriptions] = useState([])
  const allPetsData = props.allPetsData
  const [loading, setLoading] = useState(true)
  const [refresh, setRefresh] = useState(false)

  function handleSearch(value) {
    setShowPrescriptions(logs.filter(log => log.name.includes(value)))
  }

  useEffect(() => {
    axios.get(`${API_URI}prescriptions/`)
      .then(function (res) {
        setLogs(res.data)
        if (showPet) setShowPrescriptions(res.data.filter(item => item.pet_id === showPet))
        if (!showPet) setShowPrescriptions(res.data)
        setLoading(false)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [showPet, refresh])


  return (
    <Container disableGutters={true} maxWidth={false} >
      {loading ? <Loading /> :
        <div>
          <Autocomplete
            disablePortal
            id="search"
            onInputChange={(e, value) => handleSearch(value)}
            options={logs.filter((v, i, a) => a.findIndex(v2 => (v2.name === v.name)) === i)}
            getOptionLabel={(option) => option.name}
            sx={{ mt: 2, mb: 2 }}
            renderInput={(params) => <TextField {...params} label='Search by name' />}
          />
          <AddPrescription getPrescriptions={setRefresh}></AddPrescription>
          {showPrescriptions.length !== 0 ? <VerticalTabs data={showPrescriptions} prescriptions={true}></VerticalTabs> : null}
        </div>
      }
    </Container>
  )
}