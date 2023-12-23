import React from 'react'
import { Box, CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../styles/theme'


interface BannerProps {
  coverImg: string
}

const Header: React.FC<BannerProps> = ({ coverImg }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        component="img"
        sx={{
          width: '100%',
          mb: 2,
        }}
        alt="Restaurant cover image"
        src={coverImg}
      />
    </ThemeProvider>
  )
}

export default Header