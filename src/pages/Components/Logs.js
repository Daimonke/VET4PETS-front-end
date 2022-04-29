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

export default function Logs(props) {
  const [showPet, setShowPet] = props.showPet
  const [logs, setLogs] = useState([])
  const [showLogs, setShowLogs] = useState([])
  const allPetsData = props.allPetsData
  const [loading, setLoading] = useState(true)

function handleSearch(value){
  setShowLogs(logs.filter(log => log.name.includes(value)))
  setShowPet('')
}

  useEffect(() => {
    axios.get(`${API_URI}logs/${showPet? showPet : ''}`)
      .then(function (res) {
        setLogs(res.data)
        setShowLogs(res.data)
        setLoading(false)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [showPet])

  return (
    <Container disableGutters={true} >
      {loading ? <Loading /> :
      <div>
        <Autocomplete
      disablePortal
      id="search"
      onInputChange={(e, value) => handleSearch(value)}
      options={allPetsData}
      getOptionLabel={(option) => option.name}
      sx={{ mt: 2 }}
      renderInput={(params) => <TextField {...params} label='Search by name' />}
    />
        {showLogs.length !== 0 ? <VerticalTabs data={showLogs}></VerticalTabs> : null}
      </div>
      }
    </Container>
  )
}
