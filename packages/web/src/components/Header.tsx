import React from 'react'
import { AppBar, Typography, CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../styles/theme'


interface HeaderProps {
  restaurantName: string
}

const Header: React.FC<HeaderProps> = ({ restaurantName }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position='sticky'
        color='primary'
        sx={{
          width: '100vw',
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" >
          {restaurantName}
        </Typography>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header