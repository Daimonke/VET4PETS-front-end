import { Divider } from '@mui/material'
import { Container } from '@mui/material'
import React from 'react'
import Logo from '../images/Vet4Pets-logos_black.png'

export default function Header() {
  return (
    <Container align='center' sx={{pt:2, pb:2}} disableGutters={true}>
       <img src={Logo} alt='Logo' loading="lazy" height={100} />
    <Divider></Divider>
    </Container>
  )
}
