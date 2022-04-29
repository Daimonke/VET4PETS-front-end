import { Typography } from '@mui/material'
import { Link } from '@mui/material'
import { Container } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <div style={{backgroundColor: 'rgb(0, 0, 0)', color: 'white', position: 'fixed', left: 0, right: 0, bottom: 0,
     height: '5vh', display: 'flex', alignItems:'center', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}>
        <Container sx={{textAlign: 'center'}}>
        <Typography variant='body1' sx={{m: 0, p:0}}>VET4PETS © <Link href="https://github.com/Daimonke/" variant='body1' color={'rgb(72, 209, 180)'}>Daimonke</Link></Typography>
        </Container>
    </div>
  )
}
